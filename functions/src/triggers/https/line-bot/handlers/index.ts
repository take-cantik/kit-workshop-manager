import { WebhookEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgError } from '~line/notice-messages/other'
import { followHandler } from './follow'
import { joinHandler } from './join'
import { errorLogger } from '~/utils/util'
import { postbackHandler } from './postbacks'
import { unfollowHandler } from './unfollow'
import { memberJoinedHandler } from './memberJoined'

export const handlers = async (event: WebhookEvent): Promise<void> => {
  try {
    switch (event.type) {
      case 'follow':
        return await followHandler(event)
      case 'unfollow':
        return await unfollowHandler(event)
      case 'join':
        return await joinHandler(event)
      case 'memberJoined':
        return await memberJoinedHandler(event)
      case 'postback':
        return await postbackHandler(event)
      // case 'message':
      default:
    }
  } catch (err) {
    lineClient.pushMessage(event.source.userId!, msgError).catch
    errorLogger(err)
    throw new Error('handlers')
  }
}
