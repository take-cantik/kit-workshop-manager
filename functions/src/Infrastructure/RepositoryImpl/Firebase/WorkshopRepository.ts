import { Workshop, WorkshopStatus } from '~/Domains/Entities/Workshop'
import { WorkshopRepositoryInterface } from '~/Domains/Repositories/WorkshopRepository'
import { db } from '~/utils/firebase'
import { errorLogger } from '~/utils/util'

export class WorkshopRepository implements WorkshopRepositoryInterface {
  async setWorkshop(workshop: Workshop): Promise<void> {
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

  async getWorkshopList(status?: WorkshopStatus): Promise<Workshop[]> {
    try {
      const workshopList: Workshop[] = []

      if (status) {
        const res = await db.collection('workshop').where('status', '==', status).get()
        res.docs.forEach((doc) => {
          workshopList.push({
            groupId: doc.data().groupId,
            groupName: doc.data().groupName,
            status: doc.data().status
          })
        })
      } else {
        const res = await db.collection('workshop').get()
        res.docs.forEach((doc) => {
          workshopList.push({
            groupId: doc.data().groupId,
            groupName: doc.data().groupName,
            status: doc.data().status
          })
        })
      }

      return workshopList
    } catch (err) {
      errorLogger(err)
      throw new Error('getWorkshopList')
    }
  }

  async getActiveWorkshop(): Promise<Workshop | null> {
    const workshopList = await this.getWorkshopList('active')

    if (workshopList.length) {
      return workshopList[0]
    } else {
      return null
    }
  }

  async deleteWorkshop(groupId: string): Promise<void> {
    await db.collection('workshop').doc(groupId).delete()
  }
}
