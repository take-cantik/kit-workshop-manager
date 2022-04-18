import { State } from '../Entities/State'

export interface StateRepositoryInterface {
  addState: (state: State) => Promise<void>
  getLatestState: () => Promise<State>
}
