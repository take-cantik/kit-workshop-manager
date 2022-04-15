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

  async getWorkshopList(status?: WorkshopStatus) {
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

  async getActiveWorkshop() {
    const workshopList = await this.getWorkshopList('active')

    if (workshopList.length) {
      return workshopList[0]
    } else {
      return null
    }
  }
}
