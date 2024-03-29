import { PostbackEvent } from '@line/bot-sdk'
import { lineClient } from '~/utils/line'
import { msgOutage } from '../../notice-messages/other'
// import { PostbackRepository } from '~/Infrastructure/RepositoryImpl/Firebase/PostbackRepository'
// import { getPrefix, getUuid, isRichMenu } from '~/utils/postback'
// import { groupHandler } from './group'
// import { pendingHandler } from './pending'
// import { workshopChangeHandler } from './workshops/workshopChange'
// import { workshopInitHandler } from './workshops/workshopInit'
// import { v4 as uuidv4 } from 'uuid'
// import { userChangeHandler } from './users/userChange'
// import { richMenuKeyHandler } from './richMenus/richMenuKey'
// import { richMenuInfoHandler } from './richMenus/richMenuInfo'
// import { keyHandler } from './key'
// import { richMenuInitHandler } from './richMenus/richMenuInit'

export const postbackHandler = async (event: PostbackEvent): Promise<void> => {
  if (event.postback.data !== 'richMenuSwitch') {
    await lineClient.replyMessage(event.replyToken, msgOutage)
  }
  // const postbackRepository = new PostbackRepository()
  // if (isRichMenu(event)) {
  //   const prefix = getPrefix(event)
  //   if (prefix === 'richMenuInit') {
  //     richMenuInitHandler(event)
  //   } else if (prefix === 'richMenuKey') {
  //     richMenuKeyHandler(event)
  //   } else if (prefix === 'richMenuInfo') {
  //     richMenuInfoHandler(event)
  //   }
  // } else {
  //   const eventUuid = getUuid(event)
  //   if (await postbackRepository.existPostback(eventUuid)) {
  //     await lineClient.replyMessage(event.replyToken, { type: 'text', text: 'このメッセージは使用できません' })
  //   } else {
  //     const prefix = getPrefix(event)
  //     const uuid = uuidv4()
  //     if (prefix === 'group') {
  //       await groupHandler(event, uuid)
  //     }
  //     if (prefix === 'workshopInit') {
  //       await workshopInitHandler(event, uuid)
  //     }
  //     if (prefix === 'workshopChange') {
  //       await workshopChangeHandler(event, uuid)
  //     }
  //     if (prefix === 'pending') {
  //       await pendingHandler(event, uuid)
  //     }
  //     if (prefix === 'userChange') {
  //       await userChangeHandler(event, uuid)
  //     }
  //     if (prefix === 'key') {
  //       await keyHandler(event)
  //     }
  //   }
  //   await postbackRepository.addPostback(eventUuid)
  // }
}
