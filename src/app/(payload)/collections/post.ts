import { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
    },
    {
      name: "post-image",
      type: "upload",
      relationTo: "media",
    },
  ],
  access: {
    create: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    delete: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    update: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    read: () => true,
    admin: () => true,
  },
};
