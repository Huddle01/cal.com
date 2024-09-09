import { z } from "zod";

export const appDataSchema = z.object({});

export const appKeysSchema = z.object({
  api: z.string().min(1),
});
