import { FlexMessage } from '@line/bot-sdk'

export const msgKeyResult = (isOpen: boolean, borrower: string, group: string): FlexMessage => {
  const stateText = isOpen ? 'OPEN' : 'CLOSE'
  const color = isOpen ? '#E59D3C' : '#8D35D9'
  const actionText = isOpen ? '借りました' : '返しました'

  return {
    type: 'flex',
    altText: `工房${stateText}`,
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: `工房${stateText}`,
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
            text: `${group}の`,
            weight: 'bold',
            size: 'lg',
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            text: `${borrower}さんが`,
            margin: 'lg',
            weight: 'bold',
            size: 'lg',
            align: 'center',
            wrap: true
          },
          {
            type: 'text',
            text: `ものつくり工房の鍵を${actionText}`,
            align: 'center',
            wrap: true,
            margin: 'lg',
            size: 'lg',
            weight: 'bold'
          }
        ],
        paddingAll: 'xxl'
      }
    }
  }
}

export const msgKeyReceive = (borrower: string, group: string): FlexMessage => {
  return {
    type: 'flex',
    altText: 'お知らせ',
    contents: {
      type: 'bubble',
      header: {
        type: 'box',
        contents: [
          {
            type: 'text',
            text: 'お知らせ',
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
            text: `${group}の`,
            weight: 'bold',
            size: 'lg',
            wrap: true,
            align: 'center'
          },
          {
            type: 'text',
            text: `${borrower}さんが`,
            margin: 'lg',
            weight: 'bold',
            size: 'lg',
            align: 'center',
            wrap: true
          },
          {
            type: 'text',
            text: 'ものつくり工房の鍵を預かりました',
            align: 'center',
            wrap: true,
            margin: 'lg',
            size: 'lg',
            weight: 'bold'
          }
        ],
        paddingAll: 'xxl'
      }
    }
  }
}
