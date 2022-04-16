import { JoinEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgJoin } from '~line/notice-messages/join'
import { v4 as uuidv4 } from 'uuid'

export const joinHandler = async (event: JoinEvent): Promise<void> => {
  const uuid = uuidv4()
  await lineClient.replyMessage(event.replyToken, msgJoin(uuid))
}
