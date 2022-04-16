import { PostbackEvent } from '@line/bot-sdk'
import { WorkshopFirebaseRepository } from '~/repository/WorkshopFirebaseRepository'
import { lineClient } from '~/utils/line'

export const workshopChangeHandler = async (event: PostbackEvent, data: string, pendingGroupId: string) => {
  const repository = new WorkshopFirebaseRepository()

  if (event.source.type === 'group' && data === '承認') {
    await repository.changeStatus(event.source.groupId, 'disable')
    await repository.changeStatus(pendingGroupId, 'active')
    // 変わったことの通知と返信
  } else if (data === '拒否') {
    await repository.changeStatus(pendingGroupId, 'disable')
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'わかりました' })
    // pushで拒否されたことを通知
  }
}
