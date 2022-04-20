import { FlexMessage, TextMessage } from '@line/bot-sdk'
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

export const msgUsage: TextMessage = {
  type: 'text',
  text: '使い方\n\n鍵を借りた場合には、鍵の管理タブの「借りる」を押してください\n\n鍵を返す場合には、鍵の管理タブの「返す」を押してください\n\n鍵を預かった場合には、鍵の管理タブの「預かる」を押してください\n\n自分の登録情報が見たい場合には情報タブの「個人情報」を押してください\n\n現在の工房の情報を知りたい場合には情報タブの「工房」を押してください\n\nユーザーの登録情報を消したい場合にはこのアカウントをブロックすると消えます\n\n工房用のグループにこのbotを招待すると登録を促されるので、手順に従ってください。\n\n\n注意\n\nこのbotは基本的にメッセージでの対話はできないので、リッチメニューや送られてきたメッセージのボタンを用いてご利用ください。\n\nデータ量が増えすぎた場合や、使用回数があまりにも多い場合にはbotが停止する場合がありますので、常識の範囲内でお使いください\n\n\nなにか不具合や欲しい追加機能などありましたら情報タブの「お問合わせ」から気軽にご連絡ください'
}
