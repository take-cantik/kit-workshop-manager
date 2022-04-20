import { middleware } from '@line/bot-sdk'
import { logger, region, RuntimeOptions } from 'firebase-functions/v1'
import { lineMiddlewareConfig } from '~/utils/line'
import { errorLogger } from '~/utils/util'
import { handler } from './handlers'

middleware(lineMiddlewareConfig)
const app = () => {
  new Promise(handler)
    .then((result) => {
      logger.info(result)
    })
    .catch((err) => {
      errorLogger(err)
    })
}

// *************
// Functions設定

const runtimeOpts: RuntimeOptions = {
  timeoutSeconds: 540,
  memory: '1GB'
}

module.exports = region('asia-northeast1').runWith(runtimeOpts).pubsub.schedule('0 21 * * *').onRun(app)
