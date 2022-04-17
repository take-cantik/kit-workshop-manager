import { PostbackEvent } from '@line/bot-sdk'
import { getData } from '~/utils/postback'

export const richMenuInfoHandler = (event: PostbackEvent): Promise<void> => {
  const data = getData(event)

  if (data === '個人情報') {
    //
  } else if (data === '工房') {
    //
  } else if (data === '使い方') {
    //
  }
}
