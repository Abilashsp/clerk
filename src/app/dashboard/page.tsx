import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Welcome to the Dashboard!</h1>
    </div>
  );
}