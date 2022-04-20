import { FlexMessage } from '@line/bot-sdk'
import { postbackData } from '~/utils/postback'

export const msgGroup = (name: string, group: string, uuid: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '鍵が返されていません',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '21時通知',
            weight: 'bold',
            size: 'md',
            position: 'relative',
            margin: 'none',
            color: '#ffffff'
          }
        ],
        layout: 'vertical',
        paddingAll: 'xl',
        paddingStart: 'xxl',
        backgroundColor: '#D93535'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            weight: 'bold',
            size: 'lg',
            text: '21時になりましたが鍵が返されていません。',
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            margin: 'lg',
            size: 'lg',
            weight: 'bold',
            align: 'center',
            text: `${group}の${name}さんはすぐに確認してください。`,
            wrap: true
          },
          {
            type: 'separator',
            margin: 'xl'
          },
          {
            type: 'text',
            align: 'center',
            wrap: true,
            margin: 'xl',
            size: 'md',
            text: '他の人が返した場合は返したボタンを押してください'
          }
        ],
        paddingAll: 'xxl',
        paddingBottom: 'sm'
      },
      footer: {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '返した',
              data: postbackData('key', '返す', uuid),
              displayText: '鍵を返した'
            }
          }
        ]
      }
    }
  }
}

export const msgParsonal = (uuid: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '鍵が返されていません',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '21時通知',
            weight: 'bold',
            size: 'md',
            position: 'relative',
            margin: 'none',
            color: '#ffffff'
          }
        ],
        layout: 'vertical',
        paddingAll: 'xl',
        paddingStart: 'xxl',
        backgroundColor: '#D93535'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            weight: 'bold',
            size: 'lg',
            text: '21時になりましたが鍵が返されていません。',
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            margin: 'lg',
            size: 'lg',
            weight: 'bold',
            align: 'center',
            text: '鍵を返しましたか？',
            wrap: true
          }
        ],
        paddingAll: 'xxl',
        paddingBottom: 'sm'
      },
      footer: {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '返した',
              data: postbackData('key', '返す', uuid),
              displayText: '鍵を返した'
            }
          }
        ]
      }
    }
  }
}
