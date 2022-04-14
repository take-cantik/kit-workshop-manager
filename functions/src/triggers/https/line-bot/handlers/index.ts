import { WebhookEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgError } from '~line/notice-messages/other'

import { followHandler } from './follow'
import { joinHandler } from './join'
import { messagesHandler } from './messages'
import { errorLogger } from '~/utils/util'

export const handlers = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case 'follow':
        // ユーザー登録を促すやつ(団体を聞いて登録)
        return await followHandler(event)
      case 'join':
        // 工房の登録を促す
        return await joinHandler(event)
      case 'memberJoined':
        // 友達追加を促す
        break
      case 'message':
        // 個人かグループかで分ける
        return await messagesHandler(event)
      default:
    }
  } catch (err) {
    lineClient.pushMessage(event.source.userId!, msgError).catch
    errorLogger(err)
    throw new Error('handlers')
  }
}
