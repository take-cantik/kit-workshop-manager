import { FlexMessage } from '@line/bot-sdk'
import { State } from '~/Domains/Entities/State'
import { User } from '~/Domains/Entities/User'
import { postbackData } from '~/utils/postback'

export const msgUserInfo = (name: string, group: string, uuid: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '個人情報',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '個人情報',
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
                text: '上記で登録されています',
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
              data: postbackData('userChange', 'いいえ', uuid),
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

export const msgWorkshopInfo = (lastState: State, user: User): FlexMessage => {
  const color = lastState.isOpen ? '#4EB2D6' : '#D93535'
  const openMessage = lastState.isOpen ? '空いています' : '空いていません'
  const actionMessage = lastState.isOpen ? '借りています' : '返却しています'

  return {
    type: 'flex',
    altText: '工房情報',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: 'ものつくり工房',
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
        backgroundColor: `${color}`
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: `現在ものつくり工房は${openMessage}`,
            margin: 'lg',
            weight: 'bold',
            size: 'lg',
            align: 'center',
            wrap: true
          },
          {
            type: 'separator',
            margin: 'xl'
          },
          {
            type: 'text',
            text: `最後は${lastState.time}に`,
            wrap: true,
            margin: 'xl'
          },
          {
            type: 'text',
            text: `${user.group}の${user.name}さんが鍵を${actionMessage}`,
            wrap: true
          }
        ],
        paddingAll: 'xxl'
      }
    }
  }
}
