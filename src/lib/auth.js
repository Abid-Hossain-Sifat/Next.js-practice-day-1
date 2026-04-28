import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";
import { nextCookies } from "better-auth/next-js";

if (!process.env.MONGODB_URI) {
  throw new Error("Missing MONGODB_URI environment variable");
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(uri, options);
}

const db = client.db("pixgen");
const vercelPreviewUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : null;
const appUrl =
  process.env.BETTER_AUTH_URL ||
  vercelPreviewUrl ||
  "https://next-js-practice-day-1.vercel.app";
const trustedOrigins = [
  appUrl,
  "https://next-js-practice-day-1.vercel.app",
  "http://localhost:3000",
  "http://localhost:3001",
  vercelPreviewUrl,
].filter(Boolean);

export const auth = betterAuth({
  baseURL: appUrl,
  trustedOrigins,
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});