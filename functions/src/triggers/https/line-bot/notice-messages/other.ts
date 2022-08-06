import { FlexMessage, TextMessage } from '@line/bot-sdk'
import { MY_LINE_LINK } from '~/utils/secrets'

export const msgOther: TextMessage = {
  type: 'text',
  text: 'テキスト以外のメッセージを受信しました'
}

export const msgError: FlexMessage = {
  type: 'flex',
  altText: 'エラーが発生しました',
  contents: {
    type: 'bubble',
    direction: 'ltr',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: 'エラーが発生しました',
          align: 'start',
          wrap: true,
          size: 'lg',
          weight: 'bold'
        }
      ],
      paddingAll: 'xxl'
    },
    footer: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'button',
          action: {
            type: 'uri',
            label: '報告する',
            uri: MY_LINE_LINK
          },
          style: 'primary',
          color: '#D93535',
          height: 'sm'
        }
      ]
    }
  }
}

export const msgOutage: FlexMessage = {
  type: 'flex',
  altText: '現在運用停止中',
  contents: {
    type: 'bubble',
    direction: 'ltr',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '現在運用停止中です。',
          align: 'start',
          wrap: true,
          size: 'lg',
          weight: 'bold'
        }
      ],
      paddingAll: 'xxl'
    },
    footer: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'button',
          action: {
            type: 'uri',
            label: 'お問い合わせ',
            uri: MY_LINE_LINK
          },
          style: 'primary',
          color: '#4EB2D6',
          height: 'sm'
        }
      ]
    }
  }
}
