import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() { //You’re creating a function so Firebase can be initialized only once — this avoids duplicate initialization errors.
  const apps = getApps(); //It checks: “Has Firebase been initialized already?"Returns an array. If empty, it means no app exists yet.

  if (!apps.length) {
    initializeApp({ //"Hey, start the Admin app using these secure credentials."
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Replace newlines in the private key
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"), //.env doesn’t handle newlines (\n) properly in multiline private keys.
      }),
    });
  }
  //“Hey, I’m giving you access to Firebase’s Authentication system and Firestore database, all set up and ready to use.”
  return {
    auth: getAuth(), //Create/delete users (auth)
    db: getFirestore(), //Read/write any document in any collection (db)
  };
}

export const { auth, db } = initFirebaseAdmin();

//what this code does: It initializes the Firebase Admin SDK so you can use powerful features like managing users or reading/writing to Firestore without client-side restrictions