import { TRPCError } from '@trpc/server';
import { publicProcedure, router } from '~/server/trpc';

export const appRouter = router({
  getSomeData: publicProcedure.query(() => {

    return "Heres the data"
  }),
  naturalError: publicProcedure.mutation(() => {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'Incorrect access code. Provide a valid one',
    });
  }),
});

export type AppRouter = typeof appRouter;

