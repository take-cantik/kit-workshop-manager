import { PostbackEvent } from '@line/bot-sdk'
import { UuidFirebaseRepository } from '~/repository/UuidFirebaseRepository'
import { lineClient } from '~/utils/line'
import { getPrefix, getUuid } from '~/utils/postback'
import { groupHandler } from './group'
import { pendingHandler } from './pending'
import { workshopChangeHandler } from './workshops/workshopChange'
import { workshopInitHandler } from './workshops/workshopInit'
import { v4 as uuidv4 } from 'uuid'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  const uuidRepository = new UuidFirebaseRepository()

  const eventUuid = getUuid(event)
  if (await uuidRepository.existUuid(eventUuid)) {
    await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'このメッセージは既に使用されています' })
  } else {
    const prefix = getPrefix(event)
    const uuid = uuidv4()
    await uuidRepository.addUuid(uuid)

    if (prefix === 'group') {
      await groupHandler(event, uuid)
    }

    if (prefix === 'workshopInit') {
      await workshopInitHandler(event)
    }

    if (prefix === 'workshopChange') {
      await workshopChangeHandler(event)
    }

    if (prefix === 'pending') {
      await pendingHandler(event)
    }

    if (prefix === 'userChange') {
      //
    }
  }
}
