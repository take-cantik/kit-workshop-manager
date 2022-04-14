import { PostbackEvent, TextMessage } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  // test postback
  const message: TextMessage = {
    type: 'text',
    text: event.postback.data
  }

  await lineClient.replyMessage(event.replyToken, message)
}
