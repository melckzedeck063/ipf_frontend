import React from 'react';
import Chart from 'react-apexcharts';
import {chartOptions, chartData2} from '../components/MockData'

const ChartBar = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
     <header className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Analytics Dashboard</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Overview of cards shared</p>
      </header>

      <Chart options={chartOptions} series={chartData2.series} type="bar" height={350} />
    </div>
  );
};

export default ChartBar;
