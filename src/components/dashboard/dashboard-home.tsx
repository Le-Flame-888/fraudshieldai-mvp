"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { User, LogOut, Home, UserCircle } from "lucide-react";

export const DashboardHome = () => {
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  const handleSignOut = async () => {
    const token = typeof window !== "undefined" ? localStorage.getItem("bearer_token") : null;
    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      },
    });
    if (error?.code) {
      toast.error(error.code);
      return;
    }
    if (typeof window !== "undefined") localStorage.removeItem("bearer_token");
    refetch();
    router.push("/");
  };

  if (isPending) {
    return (
      <main className="min-h-[60vh] grid place-items-center">
        <p className="text-muted-foreground">Loading your dashboard...</p>
      </main>
    );
  }

  if (!session?.user) return null;

  return (
    <main className="container mx-auto px-4 py-10">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Welcome, {session.user.name || session.user.email}</CardTitle>
          <CardDescription>
            You are authenticated. Your bearer token is stored locally and will be sent with API requests.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-3">
          <Button onClick={() => router.push("/")}>
            <Home className="w-4 h-4 mr-2" />
            Go to Home
          </Button>
          <Button variant="outline" onClick={() => router.push("/profile")}>
            <UserCircle className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button variant="destructive" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign out
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default DashboardHome;