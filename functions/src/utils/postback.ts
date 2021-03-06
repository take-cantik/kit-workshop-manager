import { PostbackEvent } from '@line/bot-sdk'

export const postbackData = (prefix: string, data: string, uuid: string, groupId?: string) => {
  return `${prefix},${data},${groupId ? groupId : '*'},${uuid}`
}

export const getPrefix = (event: PostbackEvent) => {
  const dataArray = event.postback.data.split(',')
  return dataArray[0]
}

export const getData = (event: PostbackEvent) => {
  const dataArray = event.postback.data.split(',')
  return dataArray[1]
}

export const getGroupId = (event: PostbackEvent) => {
  const dataArray = event.postback.data.split(',')
  if (dataArray[2] !== '*') {
    return dataArray[2]
  } else {
    return null
  }
}

export const getUuid = (event: PostbackEvent) => {
  const dataArray = event.postback.data.split(',')
  return dataArray[3]
}

export const isRichMenu = (event: PostbackEvent) => {
  return !!(event.postback.data.indexOf('richMenu') + 1)
}
