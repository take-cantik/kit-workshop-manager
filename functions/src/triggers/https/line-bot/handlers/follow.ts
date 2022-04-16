import { FollowEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgFollow } from '~line/notice-messages/follow'
import { v4 as uuidv4 } from 'uuid'

export const followHandler = async (event: FollowEvent): Promise<void> => {
  const uuid = uuidv4()
  await lineClient.replyMessage(event.replyToken, msgFollow(uuid))
}
