import { LeaveEvent } from '@line/bot-sdk'
import { WorkshopRepository } from '~/Infrastructure/RepositoryImpl/Firebase/WorkshopRepository'

export const leaveHandler = async (event: LeaveEvent) => {
  if (event.source.type === 'group') {
    const workshopRepository = new WorkshopRepository()
    await workshopRepository.deleteWorkshop(event.source.groupId)
  }
}
