import { useState } from "react";
import { KPICard } from "@/components/KPICard";
import { DashboardFilters } from "@/components/DashboardFilters";
import { SalesChart } from "@/components/SalesChart";
import { CategoryChart } from "@/components/CategoryChart";
import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";
import { generateSalesData, generateCategoryData, getKPIData } from "@/lib/mockData";
import { toast } from "sonner";

const Index = () => {
  const [dateRange, setDateRange] = useState("30d");
  const [category, setCategory] = useState("all");
  
  const salesData = generateSalesData();
  const categoryData = generateCategoryData();
  const kpiData = getKPIData();

  const handleExport = () => {
    toast.success("Dashboard data exported successfully!", {
      description: "Your data has been downloaded as CSV file.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
              <p className="text-sm text-muted-foreground">Track your business performance in real-time</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Filters */}
        <DashboardFilters
          dateRange={dateRange}
          category={category}
          onDateRangeChange={setDateRange}
          onCategoryChange={setCategory}
          onExport={handleExport}
        />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Sales"
            value={kpiData.totalSales}
            change={kpiData.salesChange}
            icon={BarChart3}
            trend="up"
          />
          <KPICard
            title="Active Users"
            value={kpiData.totalUsers}
            change={kpiData.usersChange}
            icon={Users}
            trend="up"
          />
          <KPICard
            title="Total Revenue"
            value={kpiData.totalRevenue}
            change={kpiData.revenueChange}
            icon={DollarSign}
            trend="up"
          />
          <KPICard
            title="Growth Rate"
            value={kpiData.growthRate}
            change={kpiData.growthChange}
            icon={TrendingUp}
            trend="up"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SalesChart data={salesData} />
          <CategoryChart data={categoryData} />
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/50">
          <p>Dashboard powered by modern web technologies • Data updates every 5 minutes</p>
        </div>
      </main>
    </div>
  );
};

export default Index;
