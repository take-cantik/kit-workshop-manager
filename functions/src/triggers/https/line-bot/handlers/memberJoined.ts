import { MemberJoinEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgMemberJoined } from '../notice-messages/memberJoined'

export const memberJoinedHandler = async (event: MemberJoinEvent) => {
  await lineClient.replyMessage(event.replyToken, msgMemberJoined)
}
