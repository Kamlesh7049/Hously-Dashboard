import React, { useState } from 'react';
import { Users, ShoppingCart, DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardCard from './components/DashboardCard';
import RecentOrders from './components/RecentOrder';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeMenuItem, setActiveMenuItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuItemClick = (label) => {
    setActiveMenuItem(label);
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  const stats = [
    { title: 'Total Customers', value: '45,235', change: '12.5% this week', isPositive: true, Icon: Users, color: 'primary' },
    { title: 'Total Orders', value: '1,584', change: '8.2% this week', isPositive: true, Icon: ShoppingCart, color: 'secondary' },
    { title: 'Total Revenue', value: '$287,432', change: '5.7% this week', isPositive: true, Icon: DollarSign, color: 'success' },
    { title: 'Growth Rate', value: '27.5%', change: '3.2% this week', isPositive: false, Icon: TrendingUp, color: 'warning' }
  ];

  const timeOptions = ['Last 7 Days', 'Last 30 Days', 'Last 3 Months'];

  return (
    <div className="d-flex vh-100 bg-light">
      <Sidebar isOpen={isSidebarOpen} activeMenuItem={activeMenuItem} onMenuItemClick={handleMenuItemClick} />

      <div className="flex-grow-1">
        <Header onMenuClick={toggleSidebar} />

        <main className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h4 text-dark">Dashboard Overview</h1>
            <button className="btn btn-primary d-flex align-items-center gap-2">
              <ArrowUpRight className="h5 mb-0" />
              <span>Generate Report</span>
            </button>
          </div>

          <div className="row g-3 mb-4">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <DashboardCard {...stat} />
              </div>
            ))}
          </div>

          <div className="row g-3">
            <div className="col-lg-6">
              <RecentOrders />
            </div>
            <div className="col-lg-6">
              <div className="card p-4 shadow-sm">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h2 className="h5">Revenue Analytics</h2>
                  <select className="form-select w-auto">
                    {timeOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="border border-dashed border-secondary rounded d-flex align-items-center justify-content-center" style={{ height: 300 }}>
                  <span className="text-muted">Revenue Chart Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
