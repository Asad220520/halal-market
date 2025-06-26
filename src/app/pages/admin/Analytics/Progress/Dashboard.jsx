import React from "react";
import SalesProgress from "./SelesProgress";
import ActiveStores from "./ActiveStore";
import TopCategories from "./TopCategories";
import TopSellers from "./TopSellers";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <SalesProgress />
      <ActiveStores />
      <TopCategories />
      <TopSellers />
    </div>
  );
};

export default Dashboard;
