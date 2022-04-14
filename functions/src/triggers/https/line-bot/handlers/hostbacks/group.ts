import { PostbackEvent } from '@line/bot-sdk'
import { useUser } from '~/hook/useUser'
import { lineClient } from '~/utils/line'

export const groupHandler = async (event: PostbackEvent): Promise<void> => {
  const { getUser, addUser } = useUser()

  const user = await getUser(event.source.userId as string)

  if (user) {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: '登録ずみ' })
  } else {
    addUser({
      lineId: event.source.userId as string,
      name: 'test',
      group: event.postback.data
    })

    await lineClient.replyMessage(event.replyToken, { type: 'text', text: '登録した' })
  }
}
