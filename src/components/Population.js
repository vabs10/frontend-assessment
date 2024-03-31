import React, { useEffect, useState } from "react";
import { populationApi } from "../axios";
import Chart from "./LineChart";

function Population() {
  const [result, setResult] = useState();

  const data = {
    labels: result?.data.map((data) => data.Year),
    datasets: [
      {
        label: "US Population",
        data: result?.data.map((item) => item.Population),
        borderColor: "#2AB42A",
        backgroundColor: "#2AB42A",
      },
    ],
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await populationApi.get();
        setResult(response.data);
      } catch (error) {
        console.error("Error fetching population data:", error);
      }
    })();
  }, []);

  return (
    <div className="text-white mx-4 my-8 flex flex-col h-full">
      <h1 className="text-3xl font-semibold">Population</h1>
      <div className="flex-1 flex items-center justify-center">
        <div className="chart-container w-full h-full">
          <Chart data={data} />
        </div>
      </div>
    </div>
  );
}

export default Population;
