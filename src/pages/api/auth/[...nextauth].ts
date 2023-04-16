import NextAuth from "next-auth/next";
import {
  FirebaseAdapterConfig,
  FirestoreAdapter,
  initFirestore,
} from "@next-auth/firebase-adapter";
import { firestore } from "@/lib/firestore";
import { auth } from "firebase-admin";

export const authOptions = {
  adapter: {},
  providers: [],
};
export default NextAuth({
  adapter: FirestoreAdapter(firestore),
  providers: [],
});
