import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { SignUp, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-cover bg-center hidden lg:flex items-center justify-center w-full h-full relative">
        <Image src="/login-img.png" alt="Login Image" layout="fill" objectFit="cover" />
      </div>
      <div className="h-full flex flex-col items-center justify-center px-4 bg-gradient-to-l from-violet-950">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <ClerkLoading>
              <Loader2 className="animate-spin text-muted-foreground" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignUp />
            </ClerkLoaded>
          </div>
        </div>
      </div>
    </div>
  );
}
