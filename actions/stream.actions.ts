"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from '@stream-io/node-sdk';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY as string;
const apiSecret = process.env.STREAM_API_SECRET as string;

export const tokenProvider = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found");
  }
  if (!apiKey || !apiSecret) {
    throw new Error("Stream API key or secret is missing");
  }
  const client = new StreamClient(apiKey, apiSecret);

  // exp is optional (by default the token is valid for an hour)
const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

// Unix timestamp that represents the time 60 seconds ago
const issued = Math.floor(Date.now() / 1000) - 60;

const token = client.createToken(user.id, exp, issued);

return token;
};
