import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgChangeUser } from '../../../notice-messages/postbacks/user'

export const userChangeHandler = async (event: PostbackEvent, data: string): Promise<void> => {
  if (data === 'ユーザー変更') {
    await lineClient.replyMessage(event.replyToken, msgChangeUser)
  } else if (data === 'いいえ') {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'わかりました' })
  }
}
