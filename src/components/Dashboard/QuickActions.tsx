import { Plus, FileText, UserPlus, BarChart3, Bot, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const quickActions = [
  {
    title: "إضافة موظف جديد",
    description: "تسجيل موظف جديد في النظام",
    icon: UserPlus,
    variant: "default" as const,
    isAI: false
  },
  {
    title: "تحليل ذكي للأداء",
    description: "تحليل أداء الفريق بالذكاء الاصطناعي",
    icon: BarChart3,
    variant: "ai" as const,
    isAI: true
  },
  {
    title: "إنشاء تقرير",
    description: "إنشاء تقرير شامل للموارد البشرية",
    icon: FileText,
    variant: "outline" as const,
    isAI: false
  },
  {
    title: "المساعد الذكي",
    description: "اطرح أسئلتك على المساعد الذكي",
    icon: Bot,
    variant: "ai" as const,
    isAI: true
  },
  {
    title: "جدولة مقابلة",
    description: "حجز موعد مقابلة مع مرشح",
    icon: Calendar,
    variant: "secondary" as const,
    isAI: false
  },
];

const QuickActions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-right">إجراءات سريعة</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant === "ai" ? "outline" : action.variant}
              className={`h-auto p-4 flex flex-col items-center gap-2 text-center relative group transition-all duration-300 ${
                action.isAI 
                  ? "border-ai-primary/30 hover:border-ai-primary bg-gradient-to-br from-ai-primary/5 to-transparent hover:from-ai-primary/10" 
                  : ""
              }`}
            >
              <action.icon className={`w-6 h-6 ${action.isAI ? "text-ai-primary" : ""}`} />
              <div>
                <p className="font-medium text-sm">{action.title}</p>
                <p className="text-xs opacity-70 mt-1">{action.description}</p>
              </div>
              {action.isAI && (
                <div className="absolute top-2 left-2 w-2 h-2 bg-ai-primary rounded-full animate-pulse" />
              )}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;