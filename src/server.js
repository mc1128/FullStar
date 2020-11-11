import "./env";

import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import passport from "passport";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";

/*
import { sendSecretMail } from "./utils";

sendSecretMail("mc1128@naver.com", "123");
*/

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated }),
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
