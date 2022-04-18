import { PostbackEvent } from '@line/bot-sdk'
import { getData } from '~/utils/postback'

export const richMenuKeyHandler = (event: PostbackEvent): Promise<void> => {
  const data = getData(event)

  if (data === '借りる') {
    // stateをopenにして
    // 借りた人を追加
    // いつ借りたかも入れていいかも
  } else if (data === '返す') {
    // stateをcloseにかえる
    // 返した人を追加
    // いつ
  } else if (data === '預ける') {
    // 処理が迷いまいまい
  }
}
