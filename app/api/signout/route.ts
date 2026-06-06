import { BACKEND_URL } from "@/constants";
import { authFetch } from "@/lib/authFetch";

import { deleteSession } from "@/lib/session";
import { redirect, RedirectType } from "next/navigation";

import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const response = await authFetch(`${BACKEND_URL}/api/user/logout`, {
    method: "POST",
  });
  if  (response.status === 200) {
  }
  await deleteSession();

  redirect("/", RedirectType.push);
}