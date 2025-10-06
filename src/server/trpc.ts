/**
 * This is your entry point to setup the root configuration for tRPC on the server.
 * - `initTRPC` should only be used once per app.
 * - We export only the functionality that we use so we can enforce which base procedures should be used
 *
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/v11/router
 * @see https://trpc.io/docs/v11/procedures
 */
import { TRPCError, initTRPC } from '@trpc/server';
import { headers } from 'next/headers';
import SuperJSON from 'superjson';

/**
 * @see https://trpc.io/docs/server/context
 */
export const createTRPCContext = (opts: { headers: Headers }) => ({
  ...opts,
});

const t = initTRPC.context<{headers: Headers}>().create({
  transformer: SuperJSON,
});

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

export const protectedProcedute = publicProcedure.use(async ({next, ctx}) => {

  if (!ctx.headers.get("FAKE_AUTH")) throw new TRPCError({
    "code": "UNAUTHORIZED",
    "message": "You are not authorized, yo pass me the FAKE_AUTH"
  })

  return next({
    ctx
  })
})

export const router = t.router;
