// import { FirebaseOptions } from 'firebase/app'
// import {
//   FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MEASUREMENT_ID,
//   FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID
// } from '~/utils/secrets'
import admin from 'firebase-admin'
import { FIREBASE_DATABASE_URL } from '~/utils/secrets'

// export const firebaseConfig: FirebaseOptions = {
//   apiKey: FIREBASE_API_KEY,
//   authDomain: FIREBASE_AUTH_DOMAIN,
//   projectId: FIREBASE_PROJECT_ID,
//   storageBucket: FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
//   appId: FIREBASE_APP_ID,
//   measurementId: FIREBASE_MEASUREMENT_ID
// }

export const firebaseAdminOptions: admin.AppOptions = {
  credential: admin.credential.applicationDefault(),
  databaseURL: FIREBASE_DATABASE_URL
}
