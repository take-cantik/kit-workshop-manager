import { PostbackEvent } from '@line/bot-sdk'
import { groupHandler } from './group'
import { workshopHandler } from './workshop'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  const dataArray = event.postback.data.split(',')
  const prefix = dataArray[0]
  const data = dataArray[1]

  if (prefix === 'group') {
    await groupHandler(event, data)
  }

  if (prefix === 'workshopInit') {
    await workshopHandler(event, data)
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
