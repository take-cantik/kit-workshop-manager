import { PostbackEvent } from '@line/bot-sdk'
import { getData } from '~/utils/postback'

export const richMenuKeyHandler = (event: PostbackEvent): Promise<void> => {
  const data = getData(event)

  if (data === '借りる') {
    //
  } else if (data === '返す') {
    //
  } else if (data === '預ける') {
    //
  }
}
