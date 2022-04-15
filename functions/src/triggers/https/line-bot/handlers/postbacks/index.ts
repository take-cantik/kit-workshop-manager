import { PostbackEvent } from '@line/bot-sdk'
import { groupHandler } from './group'
import { workshopHandler } from './workshop'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  const dataArray = event.postback.data.split(',')
  const prefix = dataArray[0]

  if (prefix === 'group') {
    groupHandler(event)
  }

  if (prefix === 'workshopInit') {
    workshopHandler(event)
  }

  if (prefix === 'workshopChange') {
    //
  }

  if (prefix === 'pending') {
    //
  }

  if (prefix === 'userChange') {
    //
  }
}
