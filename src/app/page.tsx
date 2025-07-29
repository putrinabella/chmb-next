"use server";
import { auth } from "@/auth";
import { SignInGithubButton } from "@/components/ui/sign-in-github-button";
import Link from "next/link";
import { SignOutButton } from "@/components/ui/sign-out-button";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <Link href="/user-info"> User Info</Link>
        <SignOutButton />
      </div>
    );
  }
  return (
    <div>
      {""}
      <p>You Are Not Signed In</p> {""}
      <SignInGithubButton />
    </div>
  );
}
