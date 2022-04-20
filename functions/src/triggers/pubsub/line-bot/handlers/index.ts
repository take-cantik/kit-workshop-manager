import { StateRepository } from '~/Infrastructure/RepositoryImpl/Firebase/StateRepository'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'
import { WorkshopRepository } from '~/Infrastructure/RepositoryImpl/Firebase/WorkshopRepository'
import { lineClient } from '~/utils/line'

export const handler = async () => {
  const stateRepository = new StateRepository()
  const workshopRepository = new WorkshopRepository()
  const userRepository = new UserRepository()

  const currentState = await stateRepository.getLatestState()
  const workshop = await workshopRepository.getActiveWorkshop()
  const lastActiveUser = await userRepository.getUser(currentState.responsibleUserId)

  if (currentState.isOpen && workshop && lastActiveUser) {
    await lineClient.pushMessage(workshop.groupId, { type: 'text', text: 'ok' })
    await lineClient.pushMessage(lastActiveUser.lineId, { type: 'text', text: 'ok' })
  }
}
