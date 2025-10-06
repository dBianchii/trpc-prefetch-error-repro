"use client"

import { setCookie } from "./set-cookie-action";

export default function LoginPage() {
  return <button onClick={() => {
    setCookie();
  }}>Login (sets cookie to FAKE_AUTH=1)</button>
}