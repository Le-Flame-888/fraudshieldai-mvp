"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShieldCheck,
  AlertTriangle,
  Activity,
  ArrowRight
} from "lucide-react";

export const DashboardHome = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
        <div className="w-8 h-8 border-2 border-muted-foreground/20 border-t-foreground rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session?.user) return null;

  const stats = [
    {
      title: "Total Transactions",
      value: "$2.4M",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Fraud Prevented",
      value: "$142.5K",
      change: "+4.2%",
      trend: "up",
      icon: ShieldCheck,
    },
    {
      title: "Active Alerts",
      value: "24",
      change: "-2.1%",
      trend: "down",
      icon: AlertTriangle,
    },
    {
      title: "Risk Score",
      value: "Low",
      change: "98.2%",
      trend: "up",
      icon: Activity,
    },
  ];

  const recentAlerts = [
    { id: 1, title: "Unusual Transaction Pattern", time: "2m", risk: "High", amount: "$12,450" },
    { id: 2, title: "Multiple Failed Attempts", time: "15m", risk: "Medium", amount: "$3,200" },
    { id: 3, title: "Suspicious Location", time: "1h", risk: "High", amount: "$8,900" },
    { id: 4, title: "Velocity Check Failed", time: "2h", risk: "Low", amount: "$1,500" },
    { id: 5, title: "Card Not Present", time: "3h", risk: "Medium", amount: "$5,600" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Monitor transactions and fraud detection
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                {stat.trend === "up" ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{stat.change}</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Alerts */}
      <div className="grid gap-4 lg:grid-cols-7">
        {/* Transaction Volume Chart */}
        <Card className="col-span-4 border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Transaction Volume</CardTitle>
            <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
              View all
              <ArrowRight className="w-3 h-3" />
            </button>
          </CardHeader>
          <CardContent>
            <div className="h-[280px] flex items-center justify-center border border-dashed border-border rounded-lg">
              <div className="text-center">
                <Activity className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Chart placeholder</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="col-span-3 border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Alerts</CardTitle>
            <span className="text-xs text-muted-foreground">{recentAlerts.length} active</span>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="mt-0.5">
                    <AlertTriangle className={cn(
                      "w-4 h-4",
                      alert.risk === "High" ? "text-red-500" :
                        alert.risk === "Medium" ? "text-orange-500" :
                          "text-yellow-500"
                    )} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{alert.title}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                      <span>{alert.time}</span>
                      <span>•</span>
                      <span>{alert.amount}</span>
                    </div>
                  </div>
                  <span className={cn(
                    "text-xs font-medium",
                    alert.risk === "High" ? "text-red-500" :
                      alert.risk === "Medium" ? "text-orange-500" :
                        "text-yellow-500"
                  )}>
                    {alert.risk}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;