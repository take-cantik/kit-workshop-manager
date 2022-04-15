import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'

export const workshopHandler = async (event: PostbackEvent): Promise<void> => {
  if (event.source.type === 'group') {
    const groupId = event.source.groupId
    const group = await lineClient.getGroupSummary(groupId)

    console.log(group)
  }
}
