import '../alias'

import { GetRichMenuAliasResponse, RichMenu, RichMenuResponse } from '@line/bot-sdk'
import fs from 'fs'
import { lineClient } from '~/utils/line'
;(async () => {
  try {
    const richMenuAliasList = await lineClient.getRichMenuAliasList()

    richMenuAliasList.aliases.forEach(async (alias: GetRichMenuAliasResponse) => {
      await lineClient.deleteRichMenuAlias(alias.richMenuAliasId)
    })

    const richMenuList = await lineClient.getRichMenuList()

    richMenuList.forEach(async (richMenu: RichMenuResponse) => {
      await lineClient.deleteRichMenu(richMenu.richMenuId)
    })

    const richMenuInit: RichMenu = {
      size: {
        width: 2500,
        height: 843
      },
      selected: false,
      name: 'richMenuInit',
      chatBarText: 'Tap to open',
      areas: [
        {
          bounds: {
            x: 0,
            y: 0,
            width: 2500,
            height: 843
          },
          action: {
            type: 'postback',
            displayText: 'はじめる',
            data: 'richMenuInit'
          }
        }
      ]
    }

    const richMenuKey: RichMenu = {
      size: {
        width: 2500,
        height: 1686
      },
      selected: true,
      name: 'richMenuKey',
      chatBarText: 'Tap to open',
      areas: [
        {
          bounds: {
            x: 1250,
            y: 0,
            width: 1250,
            height: 400
          },
          action: {
            type: 'richmenuswitch',
            richMenuAliasId: 'richmenu-alias-info',
            data: 'richMenuSwitch'
          }
        },
        {
          bounds: {
            x: 0,
            y: 400,
            width: 833,
            height: 1286
          },
          action: {
            type: 'postback',
            displayText: '借りる',
            data: 'richMenuKey,借りる'
          }
        },
        {
          bounds: {
            x: 833,
            y: 400,
            width: 834,
            height: 1286
          },
          action: {
            type: 'postback',
            displayText: '返す',
            data: 'richMenuKey,返す'
          }
        },
        {
          bounds: {
            x: 1667,
            y: 400,
            width: 833,
            height: 1286
          },
          action: {
            type: 'postback',
            displayText: '預かる',
            data: 'richMenuKey,預かる'
          }
        }
      ]
    }

    const richMenuInfo: RichMenu = {
      size: {
        width: 2500,
        height: 1686
      },
      selected: true,
      name: 'richmenuInfo',
      chatBarText: 'Tap to open',
      areas: [
        {
          bounds: {
            x: 0,
            y: 0,
            width: 1250,
            height: 400
          },
          action: {
            type: 'richmenuswitch',
            richMenuAliasId: 'richmenu-alias-key',
            data: 'richMenuSwitch'
          }
        },
        {
          bounds: {
            x: 0,
            y: 400,
            width: 833,
            height: 1286
          },
          action: {
            type: 'postback',
            displayText: '個人情報',
            data: 'richMenuInfo,個人情報'
          }
        },
        {
          bounds: {
            x: 833,
            y: 400,
            width: 834,
            height: 1286
          },
          action: {
            type: 'postback',
            displayText: '工房',
            data: 'richMenuInfo,工房'
          }
        },
        {
          bounds: {
            x: 1667,
            y: 400,
            width: 833,
            height: 1286
          },
          action: {
            type: 'postback',
            displayText: '使い方',
            data: 'richMenuInfo,使い方'
          }
        }
      ]
    }

    const richMenuInitId = await lineClient.createRichMenu(richMenuInit)
    const richMenuKeyId = await lineClient.createRichMenu(richMenuKey)
    const richMenuInfoId = await lineClient.createRichMenu(richMenuInfo)

    const bufferInit = fs.readFileSync(`${__dirname}/../../assets/images/richMenuInit.jpg`)
    const bufferKey = fs.readFileSync(`${__dirname}/../../assets/images/richMenuKey.jpg`)
    const bufferInfo = fs.readFileSync(`${__dirname}/../../assets/images/richMenuInfo.jpg`)

    await lineClient.setRichMenuImage(richMenuInitId, bufferInit)
    await lineClient.setRichMenuImage(richMenuKeyId, bufferKey)
    await lineClient.setRichMenuImage(richMenuInfoId, bufferInfo)

    await lineClient.setDefaultRichMenu(richMenuInitId)

    await lineClient.createRichMenuAlias(richMenuInitId, 'richmenu-alias-init')
    await lineClient.createRichMenuAlias(richMenuKeyId, 'richmenu-alias-key')
    await lineClient.createRichMenuAlias(richMenuInfoId, 'richmenu-alias-info')
  } catch (err) {
    console.error(err)
  }
})()
