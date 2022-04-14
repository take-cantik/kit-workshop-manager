import { MessageEvent, TextEventMessage } from '@line/bot-sdk'
import { lineClient, makeReplyMessage } from '~/utils/line'
import { errorLogger } from '~/utils/util'

// *********
// main関数
// *********

export const messageTextHandler = async (event: MessageEvent): Promise<void> => {
  try {
    const { text } = event.message as TextEventMessage

    let test = text

    if (text === 'ahi') {
      test = 'マジ卍'
    }

    await lineClient.replyMessage(event.replyToken, makeReplyMessage(test))
  } catch (err) {
    errorLogger(err)
    throw new Error('message text handler')
  }
}
