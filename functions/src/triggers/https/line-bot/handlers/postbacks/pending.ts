import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { getData, getGroupId } from '~/utils/postback'
import { msgReRequest } from '../../notice-messages/postbacks/pending'

export const pendingHandler = async (event: PostbackEvent, uuid: string) => {
  const data = getData(event)
  const groupId = getGroupId(event)

  if (groupId && event.source.type === 'group') {
    if (data === '再通知') {
      const group = await lineClient.getGroupSummary(event.source.groupId)
      await lineClient.pushMessage(groupId, msgReRequest(group.groupId, group.groupName, uuid))
      await lineClient.replyMessage(event.replyToken, { type: 'text', text: '再通知しました' })
    }
  } else {
    throw new Error('pending')
  }
}
