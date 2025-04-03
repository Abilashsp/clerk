import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect('/dashboard');
  } else {
    redirect('/sign-in');
  }
}