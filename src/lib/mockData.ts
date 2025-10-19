export const generateSalesData = () => {
  const data = [];
  const dates = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  for (let i = 0; i < 7; i++) {
    data.push({
      date: dates[i],
      sales: Math.floor(Math.random() * 5000) + 2000,
      revenue: Math.floor(Math.random() * 15000) + 8000,
    });
  }
  
  return data;
};

export const generateCategoryData = () => {
  return [
    { category: 'Electronics', sales: 12543, orders: 423 },
    { category: 'Clothing', sales: 9832, orders: 567 },
    { category: 'Food', sales: 8234, orders: 789 },
    { category: 'Services', sales: 7123, orders: 234 },
  ];
};

export const getKPIData = () => {
  return {
    totalSales: '45,678',
    totalUsers: '12,345',
    totalRevenue: '$234,567',
    growthRate: '+23.5',
    salesChange: 12.5,
    usersChange: 8.3,
    revenueChange: 15.7,
    growthChange: 5.2,
  };
};
