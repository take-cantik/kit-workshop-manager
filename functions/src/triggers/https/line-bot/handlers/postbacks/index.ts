import { PostbackEvent } from '@line/bot-sdk'
import { groupHandler } from './group'
import { workshopInitHandler } from './workshops/workshopInit'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  const dataArray = event.postback.data.split(',')
  const prefix = dataArray[0]
  const data = dataArray[1]

  if (prefix === 'group') {
    await groupHandler(event, data)
  }

  if (prefix === 'workshopInit') {
    await workshopInitHandler(event, data)
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
