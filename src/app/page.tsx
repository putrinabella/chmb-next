"use server";
import { auth } from "@/auth";
import { SignInButton } from "./components/sign-in-button";

export default async function Home() {
  const session = await auth();
  console.log("Session:", session);
  return (
    <div>
      {""}
      <p>You Are Not Signed In</p>
      <SignInButton />
    </div>
  );
}
