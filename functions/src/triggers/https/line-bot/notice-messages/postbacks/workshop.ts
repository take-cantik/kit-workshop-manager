import { FlexMessage } from '@line/bot-sdk'

export const msgRequest = (sendingGroupName: string): FlexMessage => {
  return {
    type: 'flex',
    altText: 'グループ変更',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: 'グループ変更',
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
            text: `「${sendingGroupName}」というLINEグループがこのbotを利用しようとしています。`,
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            text: '※これを承認するとこのグループ内ではこのbotが使えなくなります。',
            wrap: true,
            margin: 'xl',
            size: 'md',
            weight: 'regular'
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
              label: '承認する',
              data: 'workshopChange,承認',
              displayText: '承認する'
            },
            color: '#4EB2D6'
          },
          {
            type: 'separator'
          },
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '拒否する',
              data: 'workshopChange,拒否',
              displayText: '拒否する'
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

export const msgPending = (activeWorkshopName: string): FlexMessage => {
  return {
    type: 'flex',
    altText: '承認待ち',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: '承認待ち',
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
            text: `現在このbotは「${activeWorkshopName}」というLINEグループで使用されています。`,
            wrap: true,
            align: 'center'
          },
          {
            type: 'separator',
            margin: 'xl'
          },
          {
            type: 'text',
            text: `こちらのグループに変更するために確認用のメッセージを「${activeWorkshopName}」に通知しましたので、承認されるまでしばらくお待ちください。`,
            wrap: true,
            margin: 'xl',
            size: 'md',
            weight: 'bold'
          }
        ],
        paddingAll: 'xxl',
        paddingBottom: 'sm'
      },
      footer: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'button',
            action: {
              type: 'postback',
              label: '再通知をする',
              data: 'pending,再通知',
              displayText: '再通知をする'
            },
            color: '#D93535',
            height: 'sm'
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
