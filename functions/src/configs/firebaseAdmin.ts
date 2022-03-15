import * as admin from "firebase-admin";

admin.initializeApp();

const FieldValue = admin.firestore.FieldValue;
const db = admin.firestore();
const removeEmpty = (objeto: any): { [key: string]: any } => {
  Object.keys(objeto).forEach((key) => {
    if (objeto[key] && typeof objeto[key] === "object")
      removeEmpty(objeto[key]);
    else if (objeto[key] === undefined) delete objeto[key];
  });
  return objeto;
};
const auth = admin.auth();

export { db, admin, FieldValue, removeEmpty, auth };
