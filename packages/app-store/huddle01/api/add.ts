import type { NextApiRequest } from "next";

import { defaultHandler, defaultResponder } from "@calcom/lib/server";

import { encodeOAuthState } from "../../_utils/oauth/encodeOAuthState";

async function handler(req: NextApiRequest) {
  const state = encodeOAuthState(req);

  const url = `http://localhost:3000/g_cal?appName=calcom&$state=${state}`;

  return { url };
}

export default defaultHandler({
  GET: Promise.resolve({ default: defaultResponder(handler) }),
});
