import './alias'

// ------------
// https

if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'lineBot') {
  exports.lineBot = require('./triggers/https/line-bot')
}

// ------------
// pubsub
if (!process.env.FUNCTION_TARGET || process.env.FUNCTION_TARGET === 'notification') {
  exports.notification = require('./triggers/pubsub/line-bot')
}
