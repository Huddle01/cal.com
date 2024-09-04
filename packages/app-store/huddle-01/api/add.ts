import type { NextApiRequest } from "next";
import { stringify } from "querystring";

import { defaultHandler, defaultResponder } from "@calcom/lib/server";

import { encodeOAuthState } from "../../_utils/oauth/encodeOAuthState";

const WEBAPP_URL = "http://localhost:3000";
async function handler(req: NextApiRequest) {
  const state = encodeOAuthState(req);

  const params = {
    response_type: "code",
    redirect_uri: `${WEBAPP_URL}/api/integrations/huddle-01/callback`,
    state,
    appName: "calcom",
  };
  const query = stringify(params);
  const url = `http://localhost:3001/g_auth?${query}`;

  return { url };
}

export default defaultHandler({
  GET: Promise.resolve({ default: defaultResponder(handler) }),
});
