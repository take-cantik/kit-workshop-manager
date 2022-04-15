import { db } from '~/utils/firebase'
import { errorLogger } from '~/utils/util'

export interface FirebaseUser {
  lineId: string
  name: string
  group: string
}

export class UserFirebaseRepository {
  async getUser(lineId: string) {
    try {
      const res = await db.collection('users').where('lineId', '==', lineId).get()

      if (res.docs.length) {
        return {
          lineId: res.docs[0].data().lineId,
          name: res.docs[0].data().name,
          group: res.docs[0].data().group
        } as FirebaseUser
      }

      return null
    } catch (err) {
      errorLogger(err)
      throw new Error('getUser')
    }
  }

  async addUser(user: FirebaseUser) {
    try {
      const doc = db.collection('users').doc(user.lineId)
      await doc.set(user)
    } catch (err) {
      errorLogger(err)
      throw new Error('addUser')
    }
  }
}
