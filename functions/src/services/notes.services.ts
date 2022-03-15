import { db } from "../configs/firebaseAdmin";

async function getNotes() {
  const colRef = db.collection("notes");
  const snapshot = await colRef.get();
  const notes = snapshot.docs.map((x) => {
    return {
      id: x.id,
      ...x.data(),
    };
  });
  return notes;
}

export default {
  getNotes,
};
