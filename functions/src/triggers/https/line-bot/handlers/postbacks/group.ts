import { PostbackEvent } from '@line/bot-sdk'
import { UserFirebaseRepository } from '~/repository/UserFirebaseRepository'
import { lineClient } from '~/utils/line'
import { getData } from '~/utils/postback'
import { msgAlreadyRegistered, msgRegistered } from '~line/notice-messages/postbacks/group'

export const groupHandler = async (event: PostbackEvent): Promise<void> => {
  const repository = new UserFirebaseRepository()

  const user = await repository.getUser(event.source.userId!)
  const data = getData(event)

  if (user) {
    await lineClient.replyMessage(event.replyToken, msgAlreadyRegistered(user.name, user.group))
  } else {
    const lineUser = await lineClient.getProfile(event.source.userId!)

    repository.addUser({
      lineId: event.source.userId as string,
      name: lineUser.displayName,
      group: data
    })

    await lineClient.replyMessage(event.replyToken, msgRegistered(lineUser.displayName, data))
  }
}
