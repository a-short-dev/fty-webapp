"use client";

import BarChart from "../components/BarChart";
import Header from "../components/Header";
import TopCards from "../components/TopCards";

const DashboardClient = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
      </div>
    </main>
  );
};

export default DashboardClient;
