import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

import { NextRequest } from 'next/server';
import { appRouter } from '~/server/router';
import { createTRPCContext } from '~/server/trpc';


const handler = async (req: NextRequest) => {
  const response = await fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    req,
    createContext: () =>
    createTRPCContext({
      headers: req.headers,
    }),
    onError({ error, path }) {
      console.error(`>>> tRPC Error on '${path}'`, error);
    },
  });

  return response;
};

export { handler as GET, handler as POST };
