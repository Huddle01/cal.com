import { z } from "zod";

import getAppKeysFromSlug from "../../_utils/getAppKeysFromSlug";

const huddle01AppKeySchema = z.object({
  identity_token: z.string(),
});

export const getHuddle01IdentityToken = async () => {
  const appKeys = await getAppKeysFromSlug("huddle01");
  return huddle01AppKeySchema.parse(appKeys);
};
