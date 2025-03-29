import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import PostThread from "@/components/forms/PostThread";

async function Page() {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const userInfo = await fetchUser(user.id)
  console.log("-----------------userInfo", userInfo);

  if (!userInfo?.onboarded) {
    redirect("/onboarding");
  }

  return (
    <>
        <h1 className="head-text">Create a thread</h1>
        <PostThread userId={userInfo._id} />
    </>
  );
}

export default Page;
