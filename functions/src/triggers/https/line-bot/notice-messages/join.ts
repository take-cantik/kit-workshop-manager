import { FlexMessage } from '@line/bot-sdk'
import { postbackData } from '~/utils/postback'

export const msgJoin = (uuid: string): FlexMessage => {
  return {
    type: 'flex',
    altText: 'このグループをものつくり工房用のグループとして登録しますか？',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '初期設定',
            weight: 'bold',
            size: 'lg',
            position: 'relative',
            margin: 'none',
            color: '#ffffff'
          }
        ],
        layout: 'vertical',
        paddingAll: 'xl',
        paddingStart: 'xxl',
        backgroundColor: '#4EB2D6'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            weight: 'bold',
            size: 'xl',
            text: 'このグループをものつくり工房用のグループとして登録しますか？',
            wrap: true
          }
        ],
        paddingAll: 'xxl'
      },
      footer: {
        type: 'box',
        layout: 'horizontal',
        contents: [
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'はい',
              data: postbackData('workshopInit', '工房登録', uuid),
              displayText: 'はい'
            },
            color: '#004C6D'
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'いいえ',
              data: postbackData('workshopInit', 'いいえ', uuid),
              displayText: 'いいえ'
            },
            color: '#D93535'
          }
        ]
      },
      styles: {
        footer: {
          separator: false
        }
      }
    }
  }
}
