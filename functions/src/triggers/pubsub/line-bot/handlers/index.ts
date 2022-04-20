import { StateRepository } from '~/Infrastructure/RepositoryImpl/Firebase/StateRepository'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'
import { WorkshopRepository } from '~/Infrastructure/RepositoryImpl/Firebase/WorkshopRepository'
import { lineClient } from '~/utils/line'
import { msgGroup, msgParsonal } from '../notice-messages'
import { v4 as uuidv4 } from 'uuid'

export const handler = async () => {
  const stateRepository = new StateRepository()
  const workshopRepository = new WorkshopRepository()
  const userRepository = new UserRepository()

  const uuid = uuidv4()
  const currentState = await stateRepository.getLatestState()
  const workshop = await workshopRepository.getActiveWorkshop()
  const lastActiveUser = await userRepository.getUser(currentState.responsibleUserId)

  if (currentState.isOpen && workshop && lastActiveUser) {
    await lineClient.pushMessage(workshop.groupId, msgGroup(lastActiveUser.name, lastActiveUser.group, uuid))
    await lineClient.pushMessage(lastActiveUser.lineId, msgParsonal(uuid))
  }
}
