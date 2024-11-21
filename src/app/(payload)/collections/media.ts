import { CollectionConfig } from "payload";

export const Medias: CollectionConfig = {
  slug: "media",
  fields: [
    {
      name: "media",
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
