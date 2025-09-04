import { eventsData } from "@/const/events";
import { eventsDataType } from "@/types/dataTypes";
import { NextResponse } from "next/server";

type Params = { id: string };

export async function GET(req: Request, context: { params: Promise<Params> }) {
  const { id } = await context.params;

  const event = eventsData.find((e: eventsDataType) => String(e._id) === id);

  if (!event) {
    return NextResponse.json({ error: "Event not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}
