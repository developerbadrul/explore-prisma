'use client';


import { useActionState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { loginUser } from '@/actions/auth';

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {state?.error && (
        <div className="bg-neo-pink border-4 border-black p-3 font-bold text-sm shadow-neo-sm flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-black shrink-0 stroke-3" />
          <span>{state.error}</span>
        </div>
      )}

      <Input
        label="Email Address"
        name="email"
        type="email"
        placeholder="e.g. sumit@learnwithsumit.com"
        required
        defaultValue="sumit@learnwithsumit.com"
      />

      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="••••••••"
        required
        defaultValue="password123"
      />

      <Button type="submit" variant="yellow" className="w-full mt-2" loading={isPending}>
        Log In
      </Button>
    </form>
  );
}
