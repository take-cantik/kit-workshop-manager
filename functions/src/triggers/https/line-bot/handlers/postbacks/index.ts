import { PostbackEvent } from '@line/bot-sdk'
import { PostbackRepository } from '~/Infrastructure/RepositoryImpl/Firebase/PostbackRepository'
import { lineClient } from '~/utils/line'
import { getPrefix, getUuid } from '~/utils/postback'
import { groupHandler } from './group'
import { pendingHandler } from './pending'
import { workshopChangeHandler } from './workshops/workshopChange'
import { workshopInitHandler } from './workshops/workshopInit'
import { v4 as uuidv4 } from 'uuid'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  const postbackRepository = new PostbackRepository()

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
      //
    }
  }

  await postbackRepository.addPostback(eventUuid)
}
