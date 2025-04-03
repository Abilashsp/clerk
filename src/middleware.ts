// middleware.ts
import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export default clerkMiddleware((req, evt) => {
  // Add any custom logic if needed
  return NextResponse.next();
});

// Optionally, you can specify a matcher for routes that need Clerk middleware
export const config = { matcher: '/((?!api/).*?)' };
