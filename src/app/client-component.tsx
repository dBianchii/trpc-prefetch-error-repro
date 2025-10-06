"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "~/utils/trpc";

export function ClientComponent() {
  const trpc = useTRPC();
  const query = useSuspenseQuery(trpc.getSomeData.queryOptions());
  return <div>{query.data}</div>;
}
