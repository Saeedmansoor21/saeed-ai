import { 
  Users, 
  UserCheck, 
  TrendingUp, 
  Clock, 
  Award, 
  UserPlus,
  Brain,
  Target,
  Calendar,
  AlertTriangle
} from "lucide-react";
import StatsCard from "@/components/Dashboard/StatsCard";
import QuickActions from "@/components/Dashboard/QuickActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const stats = [
    {
      title: "إجمالي الموظفين",
      value: "128",
      change: "+12%",
      changeType: "positive" as const,
      icon: <Users className="w-6 h-6" />,
      description: "موظف نشط"
    },
    {
      title: "معدل الحضور",
      value: "94%",
      change: "+2.1%",
      changeType: "positive" as const,
      icon: <UserCheck className="w-6 h-6" />,
      description: "هذا الشهر"
    },
    {
      title: "التنبؤ الذكي للأداء",
      value: "87%",
      change: "+5.2%",
      changeType: "positive" as const,
      icon: <Brain className="w-6 h-6" />,
      description: "توقع تحسن الأداء",
      isAI: true
    },
    {
      title: "المرشحين الجدد",
      value: "24",
      change: "+18%",
      changeType: "positive" as const,
      icon: <UserPlus className="w-6 h-6" />,
      description: "هذا الأسبوع"
    },
    {
      title: "تقييم الرضا الوظيفي",
      value: "4.2/5",
      change: "+0.3",
      changeType: "positive" as const,
      icon: <Award className="w-6 h-6" />,
      description: "متوسط التقييم"
    },
    {
      title: "توقعات الاستقالة",
      value: "3%",
      change: "-1.2%",
      changeType: "positive" as const,
      icon: <Target className="w-6 h-6" />,
      description: "احتمالية الاستقالة",
      isAI: true
    }
  ];

  const recentActivities = [
    {
      title: "انضم موظف جديد - سارة أحمد",
      time: "منذ ساعتين",
      type: "success"
    },
    {
      title: "تحديث تقييم أداء - محمد علي",
      time: "منذ 4 ساعات",
      type: "info"
    },
    {
      title: "طلب إجازة مرسل - فاطمة حسن",
      time: "منذ 6 ساعات",
      type: "warning"
    },
    {
      title: "تنبيه AI: احتمالية استقالة عالية",
      time: "منذ يوم",
      type: "danger"
    }
  ];

  const upcomingEvents = [
    {
      title: "اجتماع فريق التطوير",
      time: "10:00 ص - غداً",
      attendees: 8
    },
    {
      title: "مقابلة - أحمد محمود",
      time: "2:00 م - غداً", 
      attendees: 3
    },
    {
      title: "تقييم أداء ربع سنوي",
      time: "الأحد المقبل",
      attendees: 25
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-l from-primary/10 via-transparent to-ai-primary/10 rounded-lg p-6 border border-primary/20">
        <div className="flex items-center justify-between">
          <div className="text-right">
            <h1 className="text-2xl font-bold mb-2">مرحباً، أحمد محمد 👋</h1>
            <p className="text-muted-foreground">
              إليك نظرة سريعة على أداء الموارد البشرية اليوم
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="border-ai-primary/30 text-ai-primary bg-ai-primary/10">
              مدعوم بالذكاء الاصطناعي
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Activity & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-right">الأنشطة الأخيرة</CardTitle>
            <Button variant="ghost" size="sm">عرض الكل</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === "success" ? "bg-success" :
                    activity.type === "info" ? "bg-primary" :
                    activity.type === "warning" ? "bg-warning" :
                    "bg-destructive"
                  }`} />
                  <div className="flex-1 text-right">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-right">الأحداث القادمة</CardTitle>
            <Button variant="ghost" size="sm">
              <Calendar className="w-4 h-4 ml-1" />
              التقويم
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="text-right">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {event.attendees} مشارك
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;