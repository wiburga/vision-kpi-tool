import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Filter } from "lucide-react";

interface DashboardFiltersProps {
  dateRange: string;
  category: string;
  onDateRangeChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onExport: () => void;
}

export const DashboardFilters = ({
  dateRange,
  category,
  onDateRangeChange,
  onCategoryChange,
  onExport,
}: DashboardFiltersProps) => {
  return (
    <Card className="p-4 border-border/50">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </div>
        
        <Select value={dateRange} onValueChange={onDateRangeChange}>
          <SelectTrigger className="w-[180px]">
            <Calendar className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="90d">Last 90 days</SelectItem>
            <SelectItem value="1y">Last year</SelectItem>
          </SelectContent>
        </Select>

        <Select value={category} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="clothing">Clothing</SelectItem>
            <SelectItem value="food">Food & Beverage</SelectItem>
            <SelectItem value="services">Services</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={onExport} variant="outline" className="ml-auto gap-2">
          <Download className="h-4 w-4" />
          Export Data
        </Button>
      </div>
    </Card>
  );
};
