import { FlexMessage } from '@line/bot-sdk'

export const msgReRequest = (sendingGroupId: string, sendingGroupName: string): FlexMessage => {
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
            text: '再通知',
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
              data: `workshopChange,承認,${sendingGroupId}`,
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
              data: `workshopChange,拒否,${sendingGroupId}`,
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
