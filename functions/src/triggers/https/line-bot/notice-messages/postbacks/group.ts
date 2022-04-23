import { FlexMessage } from '@line/bot-sdk'
import { postbackData } from '~/utils/postback'

export const msgRegistered = (name: string, group: string, uuid: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '登録しました',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '登録しました',
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
              },
              {
                type: 'text',
                text: '変更しますか？',
                align: 'center'
              }
            ],
            paddingTop: 'none',
            paddingAll: 'xxl',
            paddingBottom: 'xs'
          }
        ],
        paddingAll: 'none'
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
              data: postbackData('userChange', 'ユーザー変更', uuid),
              displayText: 'はい'
            },
            color: '#D93535'
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'いいえ',
              data: postbackData('userChange', 'いいえ', uuid),
              displayText: 'いいえ'
            }
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

export const msgAlreadyRegistered = (name: string, group: string, uuid: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '登録されています',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '登録されています',
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
        backgroundColor: '#D93535'
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
                text: '既に上記で登録されています',
                align: 'center'
              },
              {
                type: 'text',
                text: '変更しますか？',
                align: 'center'
              }
            ],
            paddingTop: 'none',
            paddingAll: 'xxl',
            paddingBottom: 'xs'
          }
        ],
        paddingAll: 'none'
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
              data: postbackData('userChange', 'ユーザー変更', uuid),
              displayText: 'はい'
            },
            color: '#D93535'
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'いいえ',
              data: postbackData('userChange', 'いいえ', uuid),
              displayText: 'いいえ'
            }
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
