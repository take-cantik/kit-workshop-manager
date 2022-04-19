import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgStart } from '../../../notice-messages/richMenus/init'
import { v4 as uuidv4 } from 'uuid'

export const richMenuInitHandler = async (event: PostbackEvent) => {
  const uuid = uuidv4()
  await lineClient.replyMessage(event.replyToken, msgStart(uuid))
}
