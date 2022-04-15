import { FlexMessage } from '@line/bot-sdk'

export const msgFollow: FlexMessage = {
  type: 'flex',
  altText: '所属団体を教えてください',
  contents: {
    type: 'bubble',
    header: {
      type: 'box',
      contents: [
        {
          type: 'text',
          text: '友達追加ありがとうございます',
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
            data: 'group,プログラミング研究会',
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
            data: 'group,KEPRA',
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
            data: 'group,KITCATS',
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
            data: 'group,DEAGLE',
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
            data: 'group,自然科学部',
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
            data: 'group,寮tech',
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
            data: 'group,その他',
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
