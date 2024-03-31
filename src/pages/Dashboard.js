import React from "react";
import { Outlet } from "react-router-dom";
import { SideNav } from "../components";

function Dashboard() {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
