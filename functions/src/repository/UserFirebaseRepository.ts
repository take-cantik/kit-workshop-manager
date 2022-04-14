import { db } from '~/utils/firebase'
import { errorLogger } from '~/utils/util'

export interface User {
  lineId: string
  name: string
  group: string
}

export class UserFirebaseRepository {
  async getUser(lineId: string) {
    try {
      const user = await db.collection('users').where('lineId', '==', lineId).get()
      return user.docs[0]
    } catch (err) {
      errorLogger(err)
      throw new Error('getUser')
    }
  }

  async addUser(user: User) {
    try {
      await db.collection('users').add(user)
    } catch (err) {
      errorLogger(err)
      throw new Error('addUser')
    }
  }
}
