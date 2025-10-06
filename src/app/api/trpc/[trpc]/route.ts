// import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

// import { TRPCError } from '@trpc/server';
// import { publicProcedure, router } from '~/server/trpc';
// import { NextRequest } from 'next/server';

// const appRouter = router({
//   naturalError: publicProcedure.mutation(() => {
//     throw new TRPCError({
//       code: 'BAD_REQUEST',
//       message: 'Incorrect access code. Provide a valid one',
//     });
//     return 'asd';
//     //
//   }),
// });

// // export only the type definition of the API
// // None of the actual implementation is exposed to the client
// export type AppRouter = typeof appRouter;

// const handler = async (req: NextRequest) => {
//   const response = await fetchRequestHandler({
//     endpoint: '/api/trpc',
//     router: appRouter,
//     req,
//     createContext: () => ({}),
//     onError({ error, path }) {
//       console.error(`>>> tRPC Error on '${path}'`, error);
//     },
//   });

//   return response;
// };

// export { handler as GET, handler as POST };
