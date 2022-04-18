import { WebhookEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgError } from '~line/notice-messages/other'

import { followHandler } from './follow'
import { joinHandler } from './join'
// import { messagesHandler } from './messages'
import { errorLogger } from '~/utils/util'
import { postbackHandler } from './postbacks'

export const handlers = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case 'follow':
        return await followHandler(event)
      case 'join':
        return await joinHandler(event)
      case 'memberJoined':
        // 友達追加を促す
        break
      case 'postback':
        return await postbackHandler(event)
      // case 'message':
      // return await messagesHandler(event)
      default:
    }
  } catch (err) {
    lineClient.pushMessage(event.source.userId!, msgError).catch
    errorLogger(err)
    throw new Error('handlers')
  }
}
