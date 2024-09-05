import logger from "@calcom/lib/logger";
import type { CalendarEvent } from "@calcom/types/Calendar";
import type { VideoApiAdapter } from "@calcom/types/VideoApiAdapter";

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
