import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { SignInView } from "@/app/modules/auth/ui/views/sign-in-view";

//! for me => if a valid session exists (e.g., the user is logged in), session contains an object with user data otherwise it's a falsy value

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!!session) {
    redirect("/");
  }
  return <SignInView />;
};

export default Page;
