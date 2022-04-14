import { JoinEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgJoin } from '~line/notice-messages/join'

export const joinHandler = async (event: JoinEvent): Promise<void> => {
  await lineClient.replyMessage(event.replyToken, msgJoin)
}
