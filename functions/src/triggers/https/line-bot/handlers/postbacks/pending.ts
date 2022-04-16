import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgReRequest } from '../../notice-messages/postbacks/pending'

export const pendingHandler = async (event: PostbackEvent, data: string, groupId: string) => {
  if (event.source.type === 'group' && data === '再通知') {
    const group = await lineClient.getGroupSummary(event.source.groupId)
    await lineClient.pushMessage(groupId, msgReRequest(group.groupId, group.groupName))
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: '再通知しました' })
  }
}
