import React from "react";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import StatCards from "../components/StatCards";
import ProjectsTable from "../components/ProjectsTable";
import ChartCard from "../components/ChartCard";
import { CHARTS } from "../constants";

const Dashboard = () => {
  return (
    <div className="bg-[#1b2431] text-[#202020] font-[Montserrat,Helvetica,Open Sans,Arial] text-[13px] min-h-screen">
      <Navbar />
      <div className="container-fluid pt-[60px]">
        <div className="row">
          <Sidenav />
          <main
            role="main"
            className="w-full pl-[240px] my-3 px-5 space-y-5"
          >
            <StatCards />
            <ProjectsTable />
            <div className="flex w-full flex-wrap gap-4">
              {CHARTS.map((chart, i) => (
                <div
                  key={i}
                  className="flex-1 w-full md:w-[1/3] border border-[#ddd] rounded-md text-white text-center p-4"
                >
                  <h2 className="text-xl">{chart.title}</h2>
                  <h4 className="text-sm">{chart.subtitle}</h4>
                  <div className="h-[500px]">
                    <ChartCard config={chart.config} />
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
