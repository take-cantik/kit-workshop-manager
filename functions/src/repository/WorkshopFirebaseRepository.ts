import { Workshop, WorkshopStatus } from '~/Domain/Workshop'
import { db } from '~/utils/firebase'
import { errorLogger } from '~/utils/util'

export class WorkshopFirebaseRepository {
  async setWorkshop(workshop: Workshop) {
    try {
      await db.collection('workshop').doc(workshop.groupId).set(workshop)
    } catch (err) {
      errorLogger(err)
      throw new Error('setWorkshop')
    }
  }

  async changeStatus(groupId: string, status: WorkshopStatus) {
    try {
      await db.collection('workshop').doc(groupId).update({ status })
    } catch (err) {
      errorLogger(err)
      throw new Error('updateWorkshop')
    }
  }
}
