import type { PropsWithChildren } from 'react';
import { TRPCReactProvider } from '../utils/trpc';
import { cookies, headers } from 'next/headers';

export default async function Layout({ children }: PropsWithChildren) {
  
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
