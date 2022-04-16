import { PostbackEvent } from '@line/bot-sdk'
import { WorkshopRepository } from '~/Infrastructure/RepositoryImpl/Firebase/WorkshopRepository'
import { lineClient } from '~/utils/line'
import { getData, getGroupId } from '~/utils/postback'
import { msgReject, msgWorkshopDisable, msgWorkshopRegistered } from '../../../notice-messages/postbacks/workshop'

export const workshopChangeHandler = async (event: PostbackEvent, uuid: string): Promise<void> => {
  const repository = new WorkshopRepository()

  const data = getData(event)
  const pendingGroupId = getGroupId(event)

  if (pendingGroupId && event.source.type === 'group') {
    const pendingGroup = await lineClient.getGroupSummary(pendingGroupId)

    if (data === '承認') {
      await repository.changeStatus(event.source.groupId, 'disable')
      await repository.changeStatus(pendingGroupId, 'active')

      await lineClient.pushMessage(pendingGroupId, msgWorkshopRegistered(pendingGroup.groupName))

      const currentGroup = await lineClient.getGroupSummary(event.source.groupId)
      await lineClient.replyMessage(event.replyToken, msgWorkshopDisable(currentGroup.groupName, uuid))
    } else if (data === '拒否') {
      await repository.changeStatus(pendingGroupId, 'disable')
      await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'わかりました' })
      await lineClient.pushMessage(pendingGroupId, msgReject(pendingGroup.groupName, uuid))
    }
  } else {
    throw new Error('workshopChange')
  }
}
