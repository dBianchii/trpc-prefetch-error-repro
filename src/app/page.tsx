import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { HydrateClient, prefetch, trpc } from "~/utils/hydration-helpers";
import { ClientComponent } from "./client-component";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export default async function IndexPage() {
  const cooked = await cookies();
  if (!cooked.get("FAKE_AUTH")?.value) {
    redirect("/login");
  }

  prefetch(trpc.getSomeData.queryOptions());

  return (
    <div>
      <h2>Query</h2>
      <Suspense fallback="loading...">
        <ClientComponent />
      </Suspense>
    </div>
  );
}
