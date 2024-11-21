import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const { secret, path, type } = await req.json();

  if (secret !== process.env.PAYLOAD_SECRET) {
    return new Response("Unauthorized", { status: 401 });
  }

  revalidatePath(path, type);

  return new Response("Revalidation request sent");
};
