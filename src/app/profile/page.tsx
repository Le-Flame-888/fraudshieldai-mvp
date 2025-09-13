"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient, useSession } from "@/lib/auth-client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";
import { LogOut, User, Settings, Shield, Mail } from "lucide-react";

export default function ProfilePage() {
  const { data: session, isPending, refetch } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  const handleSignOut = async () => {
    const { error } = await authClient.signOut();
    if (error?.code) {
      toast.error(error.code);
      return;
    }
    localStorage.removeItem("bearer_token");
    refetch();
    router.push("/");
  };

  if (isPending) {
    return (
      <main className="min-h-[60vh] grid place-items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-pulse bg-gradient-to-r from-primary/20 to-primary/10 rounded-full w-16 h-16"></div>
          <p className="text-muted-foreground animate-pulse">Loading profile...</p>
        </div>
      </main>
    );
  }

  if (!session?.user) return null;

  const initials = (session.user.name || session.user.email || "U").slice(0, 1).toUpperCase();

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl blur-3xl opacity-30"></div>
          <Card className="relative border-0 shadow-2xl bg-card/80 backdrop-blur-sm">
            <CardHeader className="pb-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="relative group">
                  <Avatar className="h-24 w-24 ring-4 ring-primary/20 transition-all duration-300 group-hover:ring-primary/30">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-3xl font-semibold tracking-tight">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/0 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    {session.user.name || "User"}
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    {session.user.email}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                    <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      Verified
                    </div>
                    <div className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                      Member since {new Date(session.user.createdAt || Date.now()).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Full Name</p>
                      <p className="font-medium">{session.user.name || "-"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Email Address</p>
                      <p className="font-medium text-sm">{session.user.email}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">User ID</p>
                      <p className="font-mono text-xs bg-secondary px-2 py-1 rounded-md">{session.user.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Settings className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground">Account Status</p>
                      <p className="font-medium text-green-600 dark:text-green-400">Active</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button 
                  onClick={() => router.push("/dashboard")}
                  className="flex-1 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-200"
                >
                  <User className="h-4 w-4 mr-2" />
                  Go to Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => router.push("/settings")}
                  className="flex-1 border-border/60 hover:border-border transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={handleSignOut}
                  className="flex-1 bg-gradient-to-r from-destructive to-destructive/90 hover:from-destructive/90 hover:to-destructive/80 transition-all duration-200"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}