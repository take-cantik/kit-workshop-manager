import { PostbackEvent } from '@line/bot-sdk'
import { PostbackRepository } from '~/Infrastructure/RepositoryImpl/Firebase/PostbackRepository'
import { lineClient } from '~/utils/line'
import { getPrefix, getUuid, isRichMenu } from '~/utils/postback'
import { groupHandler } from './group'
import { pendingHandler } from './pending'
import { workshopChangeHandler } from './workshops/workshopChange'
import { workshopInitHandler } from './workshops/workshopInit'
import { v4 as uuidv4 } from 'uuid'
import { userChangeHandler } from './users/userChange'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  const postbackRepository = new PostbackRepository()

  if (isRichMenu(event)) {
    const prefix = getPrefix(event)

    if (prefix === 'richMenuKey') {
      // key handler
    } else if (prefix === 'richMenuInfo') {
      // info handler
    }
  } else {
    const eventUuid = getUuid(event)

    if (await postbackRepository.existPostback(eventUuid)) {
      await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'このメッセージは既に使用されています' })
    } else {
      const prefix = getPrefix(event)
      const uuid = uuidv4()

      if (prefix === 'group') {
        await groupHandler(event, uuid)
      }

      if (prefix === 'workshopInit') {
        await workshopInitHandler(event, uuid)
      }

      if (prefix === 'workshopChange') {
        await workshopChangeHandler(event, uuid)
      }

      if (prefix === 'pending') {
        await pendingHandler(event, uuid)
      }

      if (prefix === 'userChange') {
        await userChangeHandler(event, uuid)
      }
    }

    await postbackRepository.addPostback(eventUuid)
  }
}
