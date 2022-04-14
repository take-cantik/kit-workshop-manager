import 'dotenv/config'

// LINE

export const LINE_MESSAGING_CHANNEL_ACCESS_TOKEN = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN as string
export const LINE_MESSAGING_CHANNEL_SECRET = process.env.LINE_MESSAGING_CHANNEL_SECRET as string

// Firebase
// export const FIREBASE_API_KEY = process.env.NODE_FIREBASE_API_KEY as string
// export const FIREBASE_AUTH_DOMAIN = process.env.NODE_FIREBASE_AUTH_DOMAIN as string
// export const FIREBASE_PROJECT_ID = process.env.NODE_FIREBASE_PROJECT_ID as string
// export const FIREBASE_STORAGE_BUCKET = process.env.NODE_FIREBASE_STORAGE_BUCKET as string
// export const FIREBASE_MESSAGING_SENDER_ID = process.env.NODE_FIREBASE_MESSAGING_SENDER_ID as string
// export const FIREBASE_APP_ID = process.env.NODE_FIREBASE_APP_ID as string
// export const FIREBASE_MEASUREMENT_ID = process.env.NODE_FIREBASE_MEASUREMENT_ID as string
export const FIREBASE_DATABASE_URL = process.env.NODE_FIREBASE_DATABASE_URL as string
