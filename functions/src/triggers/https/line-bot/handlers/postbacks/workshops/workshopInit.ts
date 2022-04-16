import { PostbackEvent } from '@line/bot-sdk'
import { WorkshopRepository } from '~/Infrastructure/RepositoryImpl/Firebase/WorkshopRepository'
import { lineClient } from '~/utils/line'
import { getData } from '~/utils/postback'
import { msgPending, msgRequest, msgWorkshopRegistered } from '~line/notice-messages/postbacks/workshop'

export const workshopInitHandler = async (event: PostbackEvent, uuid: string): Promise<void> => {
  const repository = new WorkshopRepository()
  const data = getData(event)

  if (event.source.type === 'group' && data === '工房登録') {
    const groupId = event.source.groupId
    const group = await lineClient.getGroupSummary(groupId)

    const activeWorkshop = await repository.getActiveWorkshop()

    if (activeWorkshop) {
      if (activeWorkshop.groupId === event.source.groupId) {
        await lineClient.replyMessage(event.replyToken, { type: 'text', text: '既にこのグループで登録されています' })
      } else {
        await repository.setWorkshop({
          groupId,
          groupName: group.groupName,
          status: 'pending'
        })

        await lineClient.pushMessage(activeWorkshop.groupId, msgRequest(groupId, group.groupName, uuid))
        await lineClient.replyMessage(
          event.replyToken,
          msgPending(activeWorkshop.groupId, activeWorkshop.groupName, uuid)
        )
      }
    } else {
      await repository.setWorkshop({
        groupId,
        groupName: group.groupName,
        status: 'active'
      })

      await lineClient.replyMessage(event.replyToken, msgWorkshopRegistered(group.groupName))
    }
  } else if (data === 'いいえ') {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'わかりました' })
  } else {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'こんなことはありえない' })
  }
}
