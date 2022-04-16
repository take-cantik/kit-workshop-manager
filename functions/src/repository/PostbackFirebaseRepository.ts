import { db } from '~/utils/firebase'
import { errorLogger } from '~/utils/util'

export class PostbackFirebaseRepository {
  async addUuid(uuid: string): Promise<void> {
    try {
      await db.collection('postback').doc(uuid).set({ uuid })
    } catch (err) {
      errorLogger(err)
      throw new Error('getUser')
    }
  }

  async existUuid(uuid: string): Promise<boolean> {
    const res = await db.collection('uuid').doc(uuid).get()

    return !!res.data()
  }
}
