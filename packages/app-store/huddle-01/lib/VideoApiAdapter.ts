import { getHuddle01APIKey, getHuddle01Credential } from "huddle-01/utils/storage";

import logger from "@calcom/lib/logger";
import type { CalendarEvent } from "@calcom/types/Calendar";
import type { VideoApiAdapter } from "@calcom/types/VideoApiAdapter";

const fetchHuddleAPI = async (userId: number) => {
  const API_END_POINT = "https://platform-api-darshan.huddle01.workers.dev/api/v2/calendar";

  const { identityToken } = await getHuddle01Credential(userId);
  const { apiKey } = await getHuddle01APIKey();

  const headers = {
    "x-api-key": apiKey,
    "x-identity-token": identityToken,
  };
  return (endpoint: "subdomains" | "createMeeting", option?: RequestInit) => {
    return fetch(`${API_END_POINT}/${endpoint}`, {
      ...option,
      headers: {
        ...option?.headers,
        ...headers,
      },
    });
  };
};

const log = logger.getSubLogger({ prefix: ["app-store/huddle-01/lib/VideoApiAdapter"] });

const Huddle01ApiAdapter = (): VideoApiAdapter => {
  return {
    createMeeting: async (e: CalendarEvent) => {
      console.log("CALLING CREATE MEETING", e);
      return {
        type: "huddle-01",
        id: "",
        password: "",
        url: "",
      };
    },
    updateMeeting: async (bookingRef: PartialReference, event: CalendarEvent) => {
      console.log("UPDATE MEETING", bookingRef, event);
      return {
        type: "huddle-01",
        id: "",
        password: "",
        url: "",
      };
    },
    deleteMeeting: async (uid: string) => {
      console.log("DELETE MEETING", uid);
      return {
        type: "huddle-01",
        id: "",
        password: "",
        url: "",
      };
    },
    getAvailability: async () => {
      console.log("GET AVAILABILITY");
      return [];
    },
  };
};

export default Huddle01ApiAdapter;
