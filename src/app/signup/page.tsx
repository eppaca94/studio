'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function SignupPage() {
    const { toast } = useToast();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setError('');

      if (password !== confirmPassword) {
        setError("Passwords don't match.");
        toast({
          title: "Error",
          description: "Passwords don't match.",
          variant: "destructive",
        });
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create a document for the new user in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            coins: 0,
        });

        toast({
            title: "Account Created!",
            description: "You can now log in with your new credentials.",
        });
        router.push('/login');
      } catch (err: any) {
        setError(err.message);
        toast({
          title: "Signup Failed",
          description: err.message,
          variant: "destructive",
        });
      }
    }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] px-4">
      <Card className="w-full max-w-md shadow-2xl">
        <form onSubmit={handleSubmit}>
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Create an Account</CardTitle>
            <CardDescription>Join QBOGame to play, compete, and win!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
             <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-accent hover:bg-accent/90" type="submit">Create Account</Button>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?{" "}
              <Button variant="link" asChild className="p-0">
                  <Link href="/login">Log in</Link>
              </Button>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
