import { PostbackEvent } from '@line/bot-sdk'
import { State } from '~/Domains/Entities/State'
import { StateRepository } from '~/Infrastructure/RepositoryImpl/Firebase/StateRepository'
import { getCurrentTime } from '~/utils/day'
import { getData } from '~/utils/postback'

export const richMenuKeyHandler = async (event: PostbackEvent): Promise<void> => {
  const stateRepository = new StateRepository()
  const data = getData(event)

  if (data === '借りる') {
    const state: State = {
      isOpen: true,
      responsibleUserId: event.source.userId!,
      time: getCurrentTime()
    }

    await stateRepository.addState(state)
  } else if (data === '返す') {
    // stateをcloseにかえる
    // 返した人を追加
    // いつ
  } else if (data === '預ける') {
    // 処理が迷いまいまい
  }
}
