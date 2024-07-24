import CreatePostForm from "@/components/CreateFormPost";
import { getServerSession } from "next-auth";
import { authOptions } from "../libs/auth";
import { redirect } from "next/navigation";




export default async function CreatePost (){
    const session = await getServerSession(authOptions);

    if (!session) {
      redirect("/sign-in");
    }
    return (
        <CreatePostForm/>
    )
}