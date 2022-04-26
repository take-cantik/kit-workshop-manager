import { StateRepository } from '~/Infrastructure/RepositoryImpl/Firebase/StateRepository'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'
import { WorkshopRepository } from '~/Infrastructure/RepositoryImpl/Firebase/WorkshopRepository'
import { lineClient } from '~/utils/line'
import { msgGroup, msgParsonal } from '../notice-messages'
import { v4 as uuidv4 } from 'uuid'
import { logger } from 'firebase-functions/v1'

export const handler = async () => {
  try {
    const stateRepository = new StateRepository()
    const workshopRepository = new WorkshopRepository()
    const userRepository = new UserRepository()

    const uuid = uuidv4()
    const currentState = await stateRepository.getLatestState()
    logger.log('currentState')
    logger.log(currentState)
    const workshop = await workshopRepository.getActiveWorkshop()
    logger.log('workshop')
    logger.log(workshop)
    const lastActiveUser = await userRepository.getUser(currentState.responsibleUserId)
    logger.log('lastActiveUser')
    logger.log(lastActiveUser)

    if (currentState.isOpen && workshop && lastActiveUser) {
      logger.log('まだ空いてる')
      await lineClient.pushMessage(workshop.groupId, msgGroup(lastActiveUser.name, lastActiveUser.group, uuid))
      await lineClient.pushMessage(lastActiveUser.lineId, msgParsonal(uuid))
    } else {
      logger.log('空いてない')
    }
  } catch (err) {
    logger.log(err)
  }
}
