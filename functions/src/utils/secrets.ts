import 'dotenv/config'

// LINE

export const LINE_MESSAGING_CHANNEL_ACCESS_TOKEN = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN as string
export const LINE_MESSAGING_CHANNEL_SECRET = process.env.LINE_MESSAGING_CHANNEL_SECRET as string

// Firebase
export const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY as string
export const FIREBASE_AUTH_DOMAIN = process.env.FIREBASE_AUTH_DOMAIN as string
export const FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID as string
export const FIREBASE_STORAGE_BUCKET = process.env.FIREBASE_STORAGE_BUCKET as string
export const FIREBASE_MESSAGING_SENDER_ID = process.env.FIREBASE_MESSAGING_SENDER_ID as string
export const FIREBASE_APP_ID = process.env.FIREBASE_APP_ID as string
export const FIREBASE_MEASUREMENT_ID = process.env.FIREBASE_MEASUREMENT_ID as string
