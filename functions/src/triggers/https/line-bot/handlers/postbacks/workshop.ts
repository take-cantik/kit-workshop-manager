import { PostbackEvent } from '@line/bot-sdk'
import { WorkshopFirebaseRepository } from '~/repository/WorkshopFirebaseRepository'
import { lineClient } from '~/utils/line'

export const workshopHandler = async (event: PostbackEvent): Promise<void> => {
  const repository = new WorkshopFirebaseRepository()

  if (event.source.type === 'group') {
    const groupId = event.source.groupId
    const group = await lineClient.getGroupSummary(groupId)

    await repository.setWorkshop({
      groupId,
      groupName: group.groupName,
      status: 'pending'
    })

    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'toursお櫛田' })
  } else {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'こんなことはありえない' })
  }
}
