import { PostbackEvent } from '@line/bot-sdk'
import { StateRepository } from '~/Infrastructure/RepositoryImpl/Firebase/StateRepository'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'
import { WorkshopRepository } from '~/Infrastructure/RepositoryImpl/Firebase/WorkshopRepository'
import { getCurrentTime } from '~/utils/day'
import { lineClient } from '~/utils/line'
import { getData } from '~/utils/postback'
import { msgKeyReceive, msgKeyResult } from '../../notice-messages/postbacks/key'

export const keyHandler = async (event: PostbackEvent): Promise<void> => {
  const stateRepository = new StateRepository()
  const workshopPrepository = new WorkshopRepository()
  const userRepository = new UserRepository()
  const data = getData(event)

  if (data === '借りる' || data === '返す') {
    const isOpen = data === '借りる'
    const errorMessage = isOpen ? 'borrowKey' : 'returnKey'

    await stateRepository.addState({
      isOpen: isOpen,
      responsibleUserId: event.source.userId!,
      time: getCurrentTime()
    })
    const workshop = await workshopPrepository.getActiveWorkshop()
    const borrower = await userRepository.getUser(event.source.userId!)
    if (workshop && borrower) {
      await lineClient.pushMessage(workshop.groupId, msgKeyResult(isOpen, borrower.name, borrower.group))
      await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'グループへ通知されました' })
    } else {
      throw new Error(errorMessage)
    }
  } else if (data == '預かる') {
    await stateRepository.addState({
      isOpen: true,
      responsibleUserId: event.source.userId!,
      time: getCurrentTime()
    })

    const workshop = await workshopPrepository.getActiveWorkshop()
    const borrower = await userRepository.getUser(event.source.userId!)
    if (workshop && borrower) {
      await lineClient.pushMessage(workshop.groupId, msgKeyReceive(borrower.name, borrower.group))
      await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'グループへ通知されました' })
    } else {
      throw new Error('Recieve Key')
    }
  } else if (data === 'キャンセル') {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'わかりました' })
  }
}
