import { TRPCError } from '@trpc/server';
import { protectedProcedute, publicProcedure, router } from '~/server/trpc';

export const appRouter = router({
  getSomeData: protectedProcedute.query(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

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

