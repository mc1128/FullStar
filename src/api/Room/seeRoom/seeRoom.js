import { prisma } from "../../../../generated/prisma-client";
import { ROOM_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeRoom: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { id } = args;
      const { user } = request;
      const canSee = await prisma.$exists.room({
        participants_some: {
          id: user.id,
        },
      });
      if (canSee) {
        return prisma.room({ id });
      } else {
        throw Error("볼 권한이 없습니다.");
      }
    },
  },
};
