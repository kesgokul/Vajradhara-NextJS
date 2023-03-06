import mongoose from "mongoose";

export default async function ConnectDB(url: string | undefined) {
  if (!url) {
    return new Error("Invalid Mongodb URI");
  }
  await mongoose.connect(url);
}
