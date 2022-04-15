import { PostbackEvent } from '@line/bot-sdk'
import { UserFirebaseRepository } from '~/repository/UserFirebaseRepository'
import { lineClient } from '~/utils/line'

export const groupHandler = async (event: PostbackEvent): Promise<void> => {
  const repository = new UserFirebaseRepository()

  const user = await repository.getUser(event.source.userId!)

  if (user) {
    await lineClient.replyMessage(event.replyToken, {
      type: 'text',
      text: `名前: ${user.name}, 団体: ${user.group}で登録されています`
    })
  } else {
    const lineUser = await lineClient.getProfile(event.source.userId!)

    repository.addUser({
      lineId: event.source.userId as string,
      name: lineUser.displayName,
      group: event.postback.data
    })

    await lineClient.replyMessage(event.replyToken, { type: 'text', text: '登録した' })
  }
}
