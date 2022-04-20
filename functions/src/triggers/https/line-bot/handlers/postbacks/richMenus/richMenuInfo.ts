import { PostbackEvent } from '@line/bot-sdk'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'
import { lineClient } from '~/utils/line'
import { getData } from '~/utils/postback'
import { msgUsage, msgUserInfo, msgWorkshopInfo } from '../../../notice-messages/richMenus/info'
import { v4 as uuidv4 } from 'uuid'
import { StateRepository } from '~/Infrastructure/RepositoryImpl/Firebase/StateRepository'

export const richMenuInfoHandler = async (event: PostbackEvent): Promise<void> => {
  const userRepository = new UserRepository()
  const stateRepository = new StateRepository()

  const data = getData(event)
  const uuid = uuidv4()

  if (data === '個人情報') {
    const currentUser = await userRepository.getUser(event.source.userId!)

    if (currentUser) {
      await lineClient.replyMessage(event.replyToken, msgUserInfo(currentUser.name, currentUser.group, uuid))
    } else {
      throw new Error('userInfo')
    }
  } else if (data === '工房') {
    const currentState = await stateRepository.getLatestState()
    const actionUser = await userRepository.getUser(currentState.responsibleUserId)

    if (actionUser) {
      await lineClient.replyMessage(event.replyToken, msgWorkshopInfo(currentState, actionUser))
    } else {
      throw new Error('workshopInfo')
    }
  } else if (data === '使い方') {
    await lineClient.replyMessage(event.replyToken, msgUsage)
  }
}
