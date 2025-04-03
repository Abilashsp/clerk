"use client"
import React from 'react';
import { SignIn as ClerkSignIn } from '@clerk/clerk-react';

const SignIn = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <ClerkSignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default SignIn;
