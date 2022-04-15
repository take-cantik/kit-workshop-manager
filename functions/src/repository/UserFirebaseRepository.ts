import { db } from '~/utils/firebase'
import { errorLogger } from '~/utils/util'

export interface FirebaseUser {
  lineId: string
  name: string
  group: string
}

export class UserFirebaseRepository {
  async getUser(lineId: string): Promise<FirebaseUser | null> {
    try {
      const res = await db.collection('users').doc(lineId).get()

      if (res.data()) {
        return {
          lineId: res.data()!.lineId,
          name: res.data()!.name,
          group: res.data()!.group
        }
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
