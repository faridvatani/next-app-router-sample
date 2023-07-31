import { NextRequest } from "next/server";

// checkout this: curl http://localhost:3000/api/user
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name");

  console.log("GET REQUEST", name);
  return new Response(JSON.stringify({ name: "Farid" }), {
    status: 401,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("POST  REQUEST", body);


  return new Response('OK')
}
