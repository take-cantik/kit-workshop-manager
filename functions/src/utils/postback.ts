export const postbackData = (prefix: string, data: string, uuid: string, groupId?: string) => {
  return `${prefix},${data},${groupId ? groupId : '*'},${uuid}`
}

export const getPrefix = (postbackData: string) => {
  const dataArray = postbackData.split(',')
  return dataArray[0]
}

export const getData = (postbackData: string) => {
  const dataArray = postbackData.split(',')
  return dataArray[1]
}

export const getGroupId = (postbackData: string) => {
  const dataArray = postbackData.split(',')
  if (dataArray[2] !== '*') {
    return dataArray[2]
  } else {
    return null
  }
}

export const getUuid = (postbackData: string) => {
  const dataArray = postbackData.split(',')
  return dataArray[3]
}
