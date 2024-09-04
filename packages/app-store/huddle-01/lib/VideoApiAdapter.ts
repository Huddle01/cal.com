import type { CalendarEvent } from "@calcom/types/Calendar";

const Huddle01ApiAdapter = () => {
  return {
    createMeeting: async (e: CalendarEvent) => {
      return {
        type: "huddle01_conferencing",
        // id: result.id.toString(),
        //  password: result.password || "",
        //  url: result.join_url,
      };
    },
  };
};

export default Huddle01ApiAdapter;
