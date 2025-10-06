import { TRPCError } from '@trpc/server';
import { publicProcedure, router } from '~/server/trpc';

export const appRouter = router({
  naturalError: publicProcedure.mutation(() => {
    throw new TRPCError({
      code: 'BAD_REQUEST',
      message: 'Incorrect access code. Provide a valid one',
    });
    return 'asd';
  }),
});

export type AppRouter = typeof appRouter;

