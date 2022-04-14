import { MessageEvent, TextEventMessage } from '@line/bot-sdk'
import { lineClient, makeReplyMessage } from '~/utils/line'
import { errorLogger } from '~/utils/util'
import { db } from '~/utils/firebase/index'

// *********
// main関数
// *********

interface Test {
  text: string
}

export const messageTextHandler = async (event: MessageEvent): Promise<void> => {
  try {
    const { text } = event.message as TextEventMessage

    let test = text

    if (text === 'ahi') {
      test = 'マジ卍'
    }

    const texts: Test[] = []
    if (text === 'あひ') {
      const res = await db.collection('tests').get()
      res.forEach((doc) => {
        texts.push(doc.data() as Test)
      })
      test = texts[0].text
    }

    await lineClient.replyMessage(event.replyToken, makeReplyMessage(test))
  } catch (err) {
    errorLogger(err)
    throw new Error('message text handler')
  }
}
