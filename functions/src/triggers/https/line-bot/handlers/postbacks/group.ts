import { PostbackEvent } from '@line/bot-sdk'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'
import { lineClient } from '~/utils/line'
import { getData } from '~/utils/postback'
import { msgAlreadyRegistered, msgRegistered } from '~line/notice-messages/postbacks/group'

export const groupHandler = async (event: PostbackEvent, uuid: string): Promise<void> => {
  const repository = new UserRepository()

  const data = getData(event)
  const group = ['プログラミング研究会', 'KEPRA', 'KITCATS', 'DEAGLE', '自然科学部', '寮tech', 'その他']

  if (group.includes(data)) {
    const user = await repository.getUser(event.source.userId!)

    if (user) {
      await lineClient.replyMessage(event.replyToken, msgAlreadyRegistered(user.name, user.group, uuid))
    } else {
      const lineUser = await lineClient.getProfile(event.source.userId!)

      repository.addUser({
        lineId: event.source.userId as string,
        name: lineUser.displayName,
        group: data
      })

      const richMenu = await lineClient.getRichMenuAlias('richmenu-alias-key')
      await lineClient.linkRichMenuToUser(event.source.userId!, richMenu.richMenuId)
      await lineClient.replyMessage(event.replyToken, msgRegistered(lineUser.displayName, data, uuid))
    }
  }
}
