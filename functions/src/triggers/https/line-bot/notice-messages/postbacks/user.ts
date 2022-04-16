import { FlexMessage } from '@line/bot-sdk'
import { postbackData } from '~/utils/postback'

export const msgChangeUser = (uuid: string): FlexMessage => {
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
            text: '団体情報を変更します',
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
              data: postbackData('userChange', 'プログラミング研究会', uuid),
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
              data: postbackData('userChange', 'KEPRA', uuid),
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
              data: postbackData('userChange', 'KITCATS', uuid),
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
              data: postbackData('userChange', 'DEAGLE', uuid),
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
              data: postbackData('userChange', '自然科学部', uuid),
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
              data: postbackData('userChange', '寮tech', uuid),
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
              data: postbackData('userChange', 'その他', uuid),
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

export const msgUpdate = (name: string, group: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '更新しました',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '変更しました',
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
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '名前：'
              },
              {
                type: 'text',
                text: name,
                size: 'xl',
                weight: 'bold',
                align: 'center'
              }
            ],
            paddingAll: 'xxl'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '団体：'
              },
              {
                type: 'text',
                text: group,
                weight: 'bold',
                align: 'center',
                size: 'xl'
              }
            ],
            paddingAll: 'xxl',
            paddingTop: 'none'
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'text',
                text: '上記で登録されました',
                align: 'center'
              }
            ],
            paddingAll: 'xxl'
          }
        ],
        paddingAll: 'none'
      },
      styles: {
        footer: {
          separator: false
        }
      }
    }
  }
}
