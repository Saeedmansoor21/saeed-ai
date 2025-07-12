import { 
  Users, 
  BarChart3, 
  UserPlus, 
  Calendar, 
  FileText, 
  Bot, 
  Settings,
  Home,
  Award,
  Clock,
  TrendingUp
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "الرئيسية",
    href: "/",
    icon: Home,
  },
  {
    title: "إدارة الموظفين",
    href: "/employees",
    icon: Users,
    badge: "128"
  },
  {
    title: "التوظيف الذكي",
    href: "/recruitment",
    icon: UserPlus,
    badge: "12",
    isAI: true
  },
  {
    title: "التحليلات",
    href: "/analytics",
    icon: BarChart3,
    isAI: true
  },
  {
    title: "تقييم الأداء",
    href: "/performance",
    icon: Award,
  },
  {
    title: "الحضور والانصراف",
    href: "/attendance",
    icon: Clock,
  },
  {
    title: "التقارير",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "التنبؤات الذكية",
    href: "/predictions",
    icon: TrendingUp,
    isAI: true
  },
  {
    title: "المساعد الذكي",
    href: "/ai-assistant",
    icon: Bot,
    badge: "نشط",
    isAI: true
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 border-l bg-card h-full flex flex-col">
      {/* AI Badge */}
      <div className="p-4 border-b">
        <div className="bg-gradient-to-r from-ai-primary/10 to-ai-secondary/10 border border-ai-primary/20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="w-4 h-4 text-ai-primary" />
            <span className="text-sm font-medium text-ai-primary">الذكاء الاصطناعي</span>
          </div>
          <p className="text-xs text-muted-foreground">
            مساعد ذكي لتحسين إدارة الموارد البشرية
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all duration-200 group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon className={cn(
                    "w-4 h-4 transition-colors",
                    item.isAI && !isActive && "text-ai-primary"
                  )} />
                  <span className="flex-1 text-right">{item.title}</span>
                  {item.isAI && (
                    <div className="w-2 h-2 rounded-full bg-ai-primary animate-pulse" />
                  )}
                  {item.badge && (
                    <Badge 
                      variant={isActive ? "secondary" : "outline"} 
                      className={cn(
                        "text-xs px-1.5 py-0.5",
                        item.isAI && !isActive && "border-ai-primary/20 text-ai-primary"
                      )}
                    >
                      {item.badge}
                    </Badge>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
          <Settings className="w-4 h-4" />
          الإعدادات
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;