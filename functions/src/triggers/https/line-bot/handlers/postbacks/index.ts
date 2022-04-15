import { PostbackEvent, TextMessage } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { groupHandler } from './group'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  const replyMessage: TextMessage = {
    type: 'text',
    text: ''
  }

  const group = ['プログラミング研究会', 'KEPRA', 'KITCATS', 'DEAGLE', '自然科学部', '寮tech', 'その他']
  const answer = ['はい', 'いいえ']

  if (group.includes(event.postback.data)) {
    groupHandler(event)
  }

  if (answer.includes(event.postback.data)) {
    if (event.postback.data === 'はい') {
      // 工房の追加
      replyMessage.text = '登録しました'
    } else {
      replyMessage.text = 'わかりました'
    }
    await lineClient.replyMessage(event.replyToken, replyMessage)
  }
}
