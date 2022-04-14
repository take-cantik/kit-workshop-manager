import { PostbackEvent } from '@line/bot-sdk'
import { UserFirebaseRepository } from '~/repository/UserFirebaseRepository'
import { lineClient } from '~/utils/line'

export const groupHandler = async (event: PostbackEvent): Promise<void> => {
  const repository = new UserFirebaseRepository()

  const user = await repository.getUser(event.source.userId as string)

  if (user) {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: '登録ずみ' })
  } else {
    repository.addUser({
      lineId: event.source.userId as string,
      name: 'test',
      group: event.postback.data
    })

    await lineClient.replyMessage(event.replyToken, { type: 'text', text: '登録した' })
  }
}
