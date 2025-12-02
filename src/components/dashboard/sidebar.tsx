"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    ShieldAlert,
    Activity,
    Settings,
    LogOut,
    CreditCard,
    Users,
    FileText
} from "lucide-react";

const sidebarItems = [
    {
        title: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Transactions",
        href: "/dashboard/transactions",
        icon: CreditCard,
    },
    {
        title: "Fraud Alerts",
        href: "/dashboard/alerts",
        icon: ShieldAlert,
    },
    {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: Activity,
    },
    {
        title: "Customers",
        href: "/dashboard/customers",
        icon: Users,
    },
    {
        title: "Reports",
        href: "/dashboard/reports",
        icon: FileText,
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
    },
];

export function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    };

    return (
        <aside className="hidden md:flex flex-col w-60 h-screen sticky top-0 border-r border-border">
            {/* Logo */}
            <div className="h-16 px-6 flex items-center border-b border-border">
                <div className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5" />
                    <span className="font-semibold text-sm">FraudShield AI</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-muted text-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.title}
                        </Link>
                    );
                })}
            </nav>

            {/* Sign Out */}
            <div className="p-3 border-t border-border">
                <button
                    onClick={handleSignOut}
                    className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
        </aside>
    );
}
