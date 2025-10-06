import type { PropsWithChildren } from 'react';
import { TRPCReactProvider } from '../utils/trpc';

export default async function Layout({ children }: PropsWithChildren) {
  
  return (
    <html lang="en">
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
