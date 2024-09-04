import { z } from "zod";

import { prisma } from "@calcom/prisma";

const huddle01AppKeySchema = z.object({
  identityToken: z.string(),
});

export async function storeHuddle01Credential(userId: number, identityToken: string) {
  const existingCredential = await prisma.credential.findFirst({
    where: {
      type: "huddle01_conferencing",
      userId: userId,
      appId: "huddle-01",
    },
  });

  if (existingCredential) {
    // Update the existing credential with the new identityToken
    await prisma.credential.update({
      where: { id: existingCredential.id },
      data: { key: { identityToken } },
    });
  } else {
    // Create a new credential if it doesn't exist
    await prisma.credential.create({
      data: {
        type: "huddle01_conferencing",
        key: { identityToken },
        userId: userId,
        appId: "huddle-01",
      },
    });
  }
}

export async function getHuddle01Credential(userId: number) {
  const credential = await prisma.credential.findFirst({
    where: {
      type: "huddle01_conferencing",
      userId: userId,
      appId: "huddle-01",
    },
  });

  if (!credential) {
    throw new Error("Huddle01 credential not found");
  }

  return huddle01AppKeySchema.parse(credential?.key);
}
