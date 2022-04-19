import { FlexMessage } from '@line/bot-sdk'
import { State } from '~/Domains/Entities/State'
import { User } from '~/Domains/Entities/User'
import { postbackData } from '~/utils/postback'

export const msgBorrowKey = (isOpen: boolean, uuid: string): FlexMessage => {
  const color = isOpen ? '#D93535' : '#4EB2D6'
  const openMessage = isOpen ? '空いています' : '空いていません'

  return {
    type: 'flex',
    altText: '鍵を借りる',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '鍵を借りる',
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
            weight: 'bold',
            size: 'lg',
            text: `現在ものつくり工房は${openMessage}`,
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            text: '鍵を借りましたか？',
            size: 'lg',
            weight: 'bold',
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            text: '鍵を借りるとグループへ通知されます',
            align: 'center',
            wrap: true,
            margin: 'lg'
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
              label: '借りた',
              data: postbackData('key', '借りる', uuid),
              displayText: '鍵を借りる'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'キャンセル',
              data: postbackData('key', 'キャンセル', uuid),
              displayText: 'キャンセル'
            },
            color: '#D93535'
          }
        ]
      }
    }
  }
}

export const msgReturnKey = (isOpen: boolean, uuid: string): FlexMessage => {
  const color = isOpen ? '#4EB2D6' : '#D93535'
  const openMessage = isOpen ? '空いています' : '空いていません'

  return {
    type: 'flex',
    altText: '鍵を借りる',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '鍵を借りる',
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
            weight: 'bold',
            size: 'lg',
            text: `現在ものつくり工房は${openMessage}`,
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            text: '鍵を返しましたか？',
            size: 'lg',
            weight: 'bold',
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            text: '鍵を返すとグループへ通知されます',
            align: 'center',
            wrap: true,
            margin: 'lg'
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
              displayText: '鍵を借りる'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'キャンセル',
              data: postbackData('key', 'キャンセル', uuid),
              displayText: '鍵を返す'
            },
            color: '#D93535'
          }
        ]
      }
    }
  }
}

export const msgReceive = (user: User, uuid: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '鍵を預ける',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '鍵を預かる',
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
            text: `現在鍵は、${user.group}の${user.name}さんが借りています`,
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            text: '鍵を預かりますか？',
            margin: 'lg',
            size: 'lg',
            weight: 'bold',
            align: 'center'
          },
          {
            type: 'separator',
            margin: 'lg'
          },
          {
            type: 'text',
            text: '鍵を預かるとグループへ通知されます',
            align: 'center',
            wrap: true,
            margin: 'lg',
            size: 'sm'
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
              label: '預かる',
              data: postbackData('key', '預かる', uuid),
              displayText: '鍵を預かる'
            }
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: 'キャンセル',
              data: postbackData('key', 'キャンセル', uuid),
              displayText: '鍵を返す'
            },
            color: '#D93535'
          }
        ]
      }
    }
  }
}

export const msgWorkshopClose = (lastState: State, user: User): FlexMessage => {
  return {
    type: 'flex',
    altText: '工房CLOSE',
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
        backgroundColor: '#D93535'
      },
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: '現在ものつくり工房は空いていません',
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
            text: `${user.group}の${user.name}さんが鍵を返却しています`,
            wrap: true
          }
        ],
        paddingAll: 'xxl'
      }
    }
  }
}
