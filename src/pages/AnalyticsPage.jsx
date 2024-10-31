import React from 'react';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
import CustomTable from '../components/CustomTable';
import { chartData, userData ,userColumns} from '../components/MockData'; // Importing mock data
import Chart from '../components/Chart'; // A component for displaying charts
import MainLayout from '../components/MainLayout';

const AnalyticsPage = () => {
  return (
   <MainLayout>
     <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <Header title="Analytics" />

      <main className="flex-1 p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SummaryCard title="Total Users" value="1,234" />
          <SummaryCard title="Total Revenue" value="$12,345" />
          <SummaryCard title="User Engagement" value="78%" />
        </div>

        {/* Charts Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">Revenue Over Time</h2>
          <Chart data={chartData} />
        </div>

        {/* Data Table Section */}
        <div className="bg-white shadow-lg rounded-lg p-4 dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">User Data</h2>
          <CustomTable columns={userColumns} data={userData} />
        </div>
      </main>
    </div>
   </MainLayout>
  );
};

export default AnalyticsPage;
