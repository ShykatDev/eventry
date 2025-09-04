import { eventsData } from "@/const/events";

type Params = { params: { id: string } };

export async function GET(req: Request, { params }: Params) {
  const { id } = params;

  const event = eventsData.find((_, index) => String(index + 1) === id);

  if (!event) {
    return new Response(JSON.stringify({ error: "Event not found" }), {
      status: 404,
    });
  }

  return Response.json(event);
}
