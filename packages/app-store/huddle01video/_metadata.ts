import type { AppMeta } from "@calcom/types/App";

import { LocationType } from "../locations";
import _package from "./package.json";

export const metadata = {
  name: "Huddle01",
  description: _package.description,
  installed: true,
  type: "huddle01_video",
  variant: "conferencing",
  categories: ["video", "conferencing"],
  logo: "icon.svg",
  publisher: "Huddle01",
  url: "https://www.huddle01.com/",
  slug: "huddle-01",
  title: "Huddle01",
  isGlobal: false,
  email: "support@huddle01.com",
  appData: {
    location: {
      type: "integrations:huddle01video",
      label: "Huddle01",
      linkType: "dynamic",
    },
  },
  key: { apikey: "" },
  dirName: "huddle01video",
} as AppMeta;

export const locationOption = {
  value: LocationType.Conferencing,
  label: "Huddle01 Video",
  icon: "Link",
};
