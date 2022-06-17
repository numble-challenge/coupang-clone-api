import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
  // Handle the preflight request
  if (req.method === "OPTIONS") {
    return new Response(res.body, {
      status: 204,
      headers: {
        "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "Content-Length": "0",
        "Content-Type": "application/json",
      },
    });
  }

  return NextResponse.next();
}
