import { PostbackEvent } from '@line/bot-sdk'
import { StateRepository } from '~/Infrastructure/RepositoryImpl/Firebase/StateRepository'
import { lineClient } from '~/utils/line'
import { getData } from '~/utils/postback'
import { v4 as uuidv4 } from 'uuid'
import { msgBorrowKey, msgReceive, msgReturnKey, msgWorkshopClose } from '../../../notice-messages/richMenus/key'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'

export const richMenuKeyHandler = async (event: PostbackEvent): Promise<void> => {
  const stateRepository = new StateRepository()
  const userReository = new UserRepository()
  const data = getData(event)
  const uuid = uuidv4()
  const currentState = await stateRepository.getLatestState()

  if (data === '借りる') {
    await lineClient.replyMessage(event.replyToken, msgBorrowKey(currentState.isOpen, uuid))
  } else if (data === '返す') {
    await lineClient.replyMessage(event.replyToken, msgReturnKey(currentState.isOpen, uuid))
  } else if (data === '預かる') {
    const state = await stateRepository.getLatestState()
    const actionUser = await userReository.getUser(state.responsibleUserId)

    if (actionUser) {
      if (state.isOpen) {
        await lineClient.replyMessage(event.replyToken, msgReceive(actionUser, uuid))
      } else {
        await lineClient.replyMessage(event.replyToken, msgWorkshopClose(state, actionUser))
      }
    } else {
      throw new Error('cannot get action user')
    }
  }
}
