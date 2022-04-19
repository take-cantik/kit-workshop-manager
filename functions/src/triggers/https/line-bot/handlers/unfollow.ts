import { UnfollowEvent } from '@line/bot-sdk'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'

export const unfollowHandler = async (event: UnfollowEvent) => {
  const userRepository = new UserRepository()

  await userRepository.deleteUser(event.source.userId!)
}
