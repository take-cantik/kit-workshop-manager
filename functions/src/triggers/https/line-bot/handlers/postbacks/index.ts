import { PostbackEvent } from '@line/bot-sdk'
import { getPrefix } from '~/utils/postback'
import { groupHandler } from './group'
import { pendingHandler } from './pending'
import { workshopChangeHandler } from './workshops/workshopChange'
import { workshopInitHandler } from './workshops/workshopInit'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  const prefix = getPrefix(event)

  if (prefix === 'group') {
    await groupHandler(event)
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
