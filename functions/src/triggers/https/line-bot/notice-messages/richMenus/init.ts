import { FlexMessage } from '@line/bot-sdk'
import { postbackData } from '~/utils/postback'

export const msgStart = (uuid: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '所属団体を教えてください',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: 'ユーザー登録',
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
        backgroundColor: '#4EB2D6'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            weight: 'bold',
            size: 'lg',
            text: '所属団体を教えてください',
            wrap: true,
            align: 'center'
          }
        ],
        paddingAll: 'xxl'
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'プログラミング研究会',
              data: postbackData('group', 'プログラミング研究会', uuid),
              displayText: 'プログラミング研究会で登録します'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'KEPRA',
              data: postbackData('group', 'KEPRA', uuid),
              displayText: 'KEPRAで登録します'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'KITCATS',
              data: postbackData('group', 'KITCATS', uuid),
              displayText: 'KITCATSで登録します'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'DEAGLE',
              data: postbackData('group', 'DEAGLE', uuid),
              displayText: 'DEAGLEで登録します'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '自然科学部',
              data: postbackData('group', '自然科学部', uuid),
              displayText: '自然科学部で登録します'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '寮tech',
              data: postbackData('group', '寮tech', uuid),
              displayText: '寮techで登録します'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'その他',
              data: postbackData('group', 'その他', uuid),
              displayText: 'その他で登録します'
            }
          }
        ],
        paddingBottom: 'xs',
        paddingTop: 'none'
      },
      styles: {
        footer: {
          separator: false
        }
      }
    }
  }
}
