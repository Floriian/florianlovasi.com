import { CollectionConfig } from "payload";

export const CommonSettings: CollectionConfig = {
  slug: "common-settings",
  fields: [
    { name: "title", type: "text" },
    { name: "cv", type: "upload", relationTo: "media" },
  ],
  access: {
    create: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    delete: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    update: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    read: () => true,
    admin: () => true,
  },
};
