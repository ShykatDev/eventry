import { eventsData } from "@/const/events";
import { eventsDataType } from "@/types/dataTypes";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const titleFilter = url.searchParams.get("title")?.toLowerCase();
  const categoryFilter = url.searchParams.get("category")?.toLowerCase();

  let filteredEvents: eventsDataType[] = eventsData;

  if (titleFilter) {
    filteredEvents = filteredEvents.filter((event: eventsDataType) =>
      event.title.toLowerCase().includes(titleFilter)
    );
  }

  if (categoryFilter) {
    filteredEvents = filteredEvents.filter(
      (event: eventsDataType) =>
        event.group.category.toLowerCase() === categoryFilter
    );
  }

  return Response.json(filteredEvents);
}
