import { useMutation } from "@tanstack/react-query";
import { Suspense } from "react";
import { prefetch, trpc } from "~/utils/hydration-helpers";
import { useTRPC } from "~/utils/trpc";
import { ClientComponent } from "./client-component";

export default function IndexPage() {

  prefetch(trpc.getSomeData.queryOptions())

  return (
    <div>
      <h2>Query</h2>
      <Suspense fallback="loading...">
        <ClientComponent/>
      </Suspense>
    </div>
  );
}
