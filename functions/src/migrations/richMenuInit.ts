import '../alias'

import { RichMenu } from '@line/bot-sdk'
import fs from 'fs'
import { lineClient } from '~/utils/line'
;(async () => {
  try {
    const richMenuKey: RichMenu = {
      size: {
        width: 2500,
        height: 843
      },
      selected: false,
      name: 'richMenuKey',
      chatBarText: 'Tap to open',
      areas: [
        {
          bounds: {
            x: 1250,
            y: 0,
            width: 1250,
            height: 200
          },
          action: {
            type: 'richmenuswitch',
            richMenuAliasId: 'richmenu-alias-info',
            data: 'switchInfo'
          }
        },
        {
          bounds: {
            x: 0,
            y: 200,
            width: 833,
            height: 643
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
            y: 200,
            width: 834,
            height: 643
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
            y: 200,
            width: 833,
            height: 643
          },
          action: {
            type: 'postback',
            displayText: '預ける',
            data: 'richMenuKey,預ける'
          }
        }
      ]
    }

    const richMenuInfo: RichMenu = {
      size: {
        width: 2500,
        height: 843
      },
      selected: false,
      name: 'richmenuInfo',
      chatBarText: 'Tap to open',
      areas: [
        {
          bounds: {
            x: 0,
            y: 0,
            width: 1250,
            height: 200
          },
          action: {
            type: 'richmenuswitch',
            richMenuAliasId: 'richmenu-alias-key',
            data: 'switchKey'
          }
        },
        {
          bounds: {
            x: 0,
            y: 200,
            width: 833,
            height: 643
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
            y: 200,
            width: 834,
            height: 643
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
            y: 200,
            width: 833,
            height: 643
          },
          action: {
            type: 'postback',
            displayText: '使い方',
            data: 'richMenuInfo,使い方'
          }
        }
      ]
    }

    const richMenuKeyId = await lineClient.createRichMenu(richMenuKey)
    const richMenuInfoId = await lineClient.createRichMenu(richMenuInfo)

    const bufferKey = fs.readFileSync(`${__dirname}/../../assets/images/richMenuKey.jpg`)
    const bufferInfo = fs.readFileSync(`${__dirname}/../../assets/images/richMenuInfo.jpg`)

    await lineClient.setRichMenuImage(richMenuKeyId, bufferKey)
    await lineClient.setRichMenuImage(richMenuInfoId, bufferInfo)

    await lineClient.setDefaultRichMenu(richMenuKeyId)

    await lineClient.createRichMenuAlias(richMenuKeyId, 'richmenu-alias-key')
    await lineClient.createRichMenuAlias(richMenuInfoId, 'richmenu-alias-info')
  } catch (err) {
    console.error(err)
  }
})()
