import { createSession } from "@/lib/session";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const accessToken = searchParams.get("token");

  if (!accessToken) {
    return NextResponse.json(
      { message: "Google OAuth Failed" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/api/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const { message, ...payload } = response.data;

    await createSession(payload);

    return NextResponse.redirect(
      new URL("/", req.url)
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Authentication failed" },
      { status: 500 }
    );
  }
}