import { TextMessage } from '@line/bot-sdk'

export const msgMemberJoined: TextMessage = {
  type: 'text',
  text: 'こんにちは！\nものつくり工房用のbotです。\nこのbotを使うためにグループに参加した方は友達登録をしてくださると嬉しいです!'
}
