import type { GlobalAfterChangeHook } from "payload";

export const revalidateHomepage: GlobalAfterChangeHook = async () => {
  fetch("/api/revalidate", {
    body: JSON.stringify({
      secret: process.env.PAYLOAD_SECRET,
      path: "/",
    }),
  });
};
