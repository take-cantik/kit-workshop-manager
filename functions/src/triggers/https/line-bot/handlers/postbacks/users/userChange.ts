import { PostbackEvent } from '@line/bot-sdk'
import { User } from '~/Domains/Entities/User'
import { UserRepository } from '~/Infrastructure/RepositoryImpl/Firebase/UserRepository'
import { lineClient } from '~/utils/line'
import { getData } from '~/utils/postback'
import { msgChangeUser, msgUpdate } from '../../../notice-messages/postbacks/user'

export const userChangeHandler = async (event: PostbackEvent, uuid: string): Promise<void> => {
  const userRepository = new UserRepository()

  const data = getData(event)
  const group = ['プログラミング研究会', 'KEPRA', 'KITCATS', 'DEAGLE', '自然科学部', '寮tech', 'その他']

  if (data === 'ユーザー変更') {
    await lineClient.replyMessage(event.replyToken, msgChangeUser(uuid))
  } else if (data === 'いいえ') {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'わかりました' })
  } else if (group.includes(data)) {
    const lineUser = await lineClient.getProfile(event.source.userId!)

    const newUser: User = {
      lineId: event.source.userId!,
      name: lineUser.displayName,
      group: data
    }
    await userRepository.updateUser(newUser)
    await lineClient.replyMessage(event.replyToken, msgUpdate(newUser.name, newUser.group))
  }
}
