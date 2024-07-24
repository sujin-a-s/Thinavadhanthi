import SignInBtns from "@/components/SigninButton";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../libs/auth"; 
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/Dashboard");
  }

  return <SignInBtns />;
}