import { middleware } from '@line/bot-sdk'
import { region, RuntimeOptions } from 'firebase-functions/v1'
import { lineClient, lineMiddlewareConfig } from '~/utils/line'

middleware(lineMiddlewareConfig)
const handler = async () => {
  await lineClient.pushMessage(process.env.MY_LINE_ID as string, { type: 'text', text: 'schedule test' })
}

// *************
// Functions設定

const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '1GB'
}

// test
// module.exports = region('asia-northeast1').runWith(runtimeOpts).pubsub.schedule('0 0 21 * * *').onRun(handler)
module.exports = region('asia-northeast1').runWith(runtimeOpts).pubsub.schedule('* * * * *').onRun(handler)
