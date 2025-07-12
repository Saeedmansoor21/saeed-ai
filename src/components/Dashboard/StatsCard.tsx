import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: ReactNode;
  description?: string;
  isAI?: boolean;
  trend?: "up" | "down" | "stable";
}

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = "neutral", 
  icon, 
  description,
  isAI = false,
  trend
}: StatsCardProps) => {
  return (
    <Card className={cn(
      "relative overflow-hidden transition-all duration-300 hover:shadow-lg group",
      isAI && "border-ai-primary/20 bg-gradient-to-br from-ai-primary/5 to-transparent"
    )}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-muted-foreground">{title}</p>
              {isAI && (
                <Badge variant="outline" className="text-xs border-ai-primary/30 text-ai-primary bg-ai-primary/10">
                  AI
                </Badge>
              )}
            </div>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {description && (
              <p className="text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          
          <div className={cn(
            "p-3 rounded-full transition-colors duration-300",
            isAI 
              ? "bg-gradient-to-br from-ai-primary/10 to-ai-secondary/10 text-ai-primary group-hover:scale-110"
              : "bg-primary/10 text-primary group-hover:scale-110"
          )}>
            {icon}
          </div>
        </div>

        {change && (
          <div className="mt-4 flex items-center gap-1">
            <span className={cn(
              "text-sm font-medium",
              changeType === "positive" && "text-success",
              changeType === "negative" && "text-destructive",
              changeType === "neutral" && "text-muted-foreground"
            )}>
              {change}
            </span>
            <span className="text-xs text-muted-foreground">من الشهر الماضي</span>
          </div>
        )}

        {/* AI Glow Effect */}
        {isAI && (
          <div className="absolute inset-0 bg-gradient-to-r from-ai-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;