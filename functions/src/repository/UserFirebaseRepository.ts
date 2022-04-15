import { User } from '~/Domain/User'
import { db } from '~/utils/firebase'
import { errorLogger } from '~/utils/util'

export class UserFirebaseRepository {
  async getUser(lineId: string): Promise<User | null> {
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

  async addUser(user: User) {
    try {
      await db.collection('users').doc(user.lineId).set(user)
    } catch (err) {
      errorLogger(err)
      throw new Error('addUser')
    }
  }
}
