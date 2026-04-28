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
  if (!global._mongoClientPromise) {
    const localClient = new MongoClient(uri, options);
    global._mongoClientPromise = localClient.connect();
  }
  client = await global._mongoClientPromise;
} else {
  const localClient = new MongoClient(uri, options);
  client = await localClient.connect();
}

const db = client.db("pixgen");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
  },
  plugins: [nextCookies()],
});