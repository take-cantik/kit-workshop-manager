import { State } from '~/Domains/Entities/State'
import { StateRepositoryInterface } from '~/Domains/Repositories/StateRepository'
import { db } from '~/utils/firebase'

export class StateRepository implements StateRepositoryInterface {
  async addState(state: State): Promise<void> {
    await db.collection('state').add(state)
  }

  async getLatestState(): Promise<State> {
    const res = await db.collection('state').orderBy('time', 'desc').limit(1).get()
    const data = res.docs[0].data()

    return {
      isOpen: data.isOpen,
      responsibleUserId: data.responsibleUserId,
      time: data.time
    }
  }
}
