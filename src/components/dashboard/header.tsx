"use client";

import { useSession } from "@/lib/auth-client";
import { Bell, Search, User } from "lucide-react";

export function Header() {
    const { data: session } = useSession();

    return (
        <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6 sticky top-0 z-20">
            {/* Search */}
            <div className="flex items-center gap-4 flex-1 max-w-xl">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-muted/50 border border-border rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/20 transition-colors"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
                {/* Notifications */}
                <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                    <Bell className="w-4 h-4 text-muted-foreground" />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-3 border-l border-border">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-medium">{session?.user?.name || "User"}</p>
                        <p className="text-xs text-muted-foreground">{session?.user?.email}</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                        <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                </div>
            </div>
        </header>
    );
}
