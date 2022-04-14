import { db } from '~/utils/firebase'
import { errorLogger } from '~/utils/util'

export interface User {
  lineId: string
  name: string
  group: string
}

export const useUser = () => {
  const getUser = async (lineId: string) => {
    try {
      const user = await db.collection('users').where('lineId', '==', lineId).get()
      return user.docs[0]
    } catch (err) {
      errorLogger(err)
      throw new Error('getUser')
    }
  }

  const addUser = async (user: User) => {
    try {
      await db.collection('users').add(user)
    } catch (err) {
      errorLogger(err)
      throw new Error('addUser')
    }
  }

  return {
    getUser,
    addUser
  }
}
