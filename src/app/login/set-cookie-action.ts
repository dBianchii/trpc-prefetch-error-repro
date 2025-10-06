"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setCookie() {

	(await cookies()).set("FAKE_AUTH", "1", {
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secure: false,
  });
  redirect("/");
}