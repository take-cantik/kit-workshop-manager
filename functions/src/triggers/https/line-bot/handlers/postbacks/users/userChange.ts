import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { getData } from '~/utils/postback'
import { msgChangeUser } from '../../../notice-messages/postbacks/user'

export const userChangeHandler = async (event: PostbackEvent, uuid: string): Promise<void> => {
  const data = getData(event)

  if (data === 'ユーザー変更') {
    await lineClient.replyMessage(event.replyToken, msgChangeUser(uuid))
  } else if (data === 'いいえ') {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'わかりました' })
  }
}
