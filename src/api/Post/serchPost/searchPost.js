import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchPost: async (_, args) =>
      prisma.posts({
        where: {
          OR: [
            { location_contains: args.terms },
            { caption_contains: args.term },
          ],
        },
      }),
  },
};
