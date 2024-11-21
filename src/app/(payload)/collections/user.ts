import { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  fields: [
    {
      saveToJWT: true,
      type: "select",
      name: "role",
      options: ["super-admin", "user"],
    },
  ],
  access: {
    create: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    delete: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    update: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    read: ({ req: { user } }) => Boolean(user?.role === "super-admin"),
    admin: () => true,
  },
};
