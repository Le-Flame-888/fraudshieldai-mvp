import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background font-geist">
            <Sidebar />
            <div className="flex-1 flex flex-col min-h-screen">
                <Header />
                <main className="flex-1 overflow-y-auto bg-muted/20 p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
