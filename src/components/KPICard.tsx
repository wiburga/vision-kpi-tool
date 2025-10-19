import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  trend?: "up" | "down";
}

export const KPICard = ({ title, value, change, icon: Icon, trend = "up" }: KPICardProps) => {
  const isPositive = trend === "up" ? change >= 0 : change < 0;
  
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg border-border/50 bg-gradient-to-br from-card to-card/80">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-3xl font-bold text-foreground">{value}</h3>
          <div className="flex items-center gap-1">
            <span
              className={cn(
                "text-sm font-semibold",
                isPositive ? "text-success" : "text-destructive"
              )}
            >
              {change > 0 ? "+" : ""}{change}%
            </span>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
