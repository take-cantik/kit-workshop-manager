import { PostbackEvent } from '@line/bot-sdk'
import { WorkshopFirebaseRepository } from '~/repository/WorkshopFirebaseRepository'
import { lineClient } from '~/utils/line'

export const workshopHandler = async (event: PostbackEvent): Promise<void> => {
  const repository = new WorkshopFirebaseRepository()

  if (event.source.type === 'group') {
    const groupId = event.source.groupId
    const group = await lineClient.getGroupSummary(groupId)

    const activeWorkshop = await repository.getActiveWorkshop()

    if (activeWorkshop) {
      await repository.setWorkshop({
        groupId,
        groupName: group.groupName,
        status: 'pending'
      })

      await lineClient.pushMessage(activeWorkshop.groupId, { type: 'text', text: '変われ' })
      await lineClient.replyMessage(event.replyToken, { type: 'text', text: '2個おくれんの？' })
    } else {
      await repository.setWorkshop({
        groupId,
        groupName: group.groupName,
        status: 'active'
      })

      await lineClient.replyMessage(event.replyToken, { type: 'text', text: '完了' })
    }
  } else {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'こんなことはありえない' })
  }
}
