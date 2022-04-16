import { PostbackEvent } from '@line/bot-sdk'
import { WorkshopFirebaseRepository } from '~/repository/WorkshopFirebaseRepository'
import { lineClient } from '~/utils/line'
import { msgReject, msgWorkshopDisable, msgWorkshopRegistered } from '../../../notice-messages/postbacks/workshop'

export const workshopChangeHandler = async (event: PostbackEvent, data: string, pendingGroupId: string) => {
  const repository = new WorkshopFirebaseRepository()

  const pendingGroup = await lineClient.getGroupSummary(pendingGroupId)

  if (event.source.type === 'group' && data === '承認') {
    await repository.changeStatus(event.source.groupId, 'disable')
    await repository.changeStatus(pendingGroupId, 'active')

    await lineClient.pushMessage(pendingGroupId, msgWorkshopRegistered(pendingGroup.groupName))

    const currentGroup = await lineClient.getGroupSummary(event.source.groupId)
    await lineClient.replyMessage(event.replyToken, msgWorkshopDisable(currentGroup.groupName))
  } else if (data === '拒否') {
    await repository.changeStatus(pendingGroupId, 'disable')
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'わかりました' })
    await lineClient.pushMessage(pendingGroupId, msgReject(pendingGroup.groupName))
  }
}
