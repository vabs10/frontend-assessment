import React, { useEffect, useState } from "react";
import { cryptoApi } from "../axios";
import CryptoCard from "./CryptoCard";

function Crypto() {
  const [result, setResult] = useState();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const time = `${date.getHours()}:${date.getMinutes()}`;
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = `${time} ${date.toLocaleDateString(
      "en-IN",
      options
    )}`;
    return formattedDate;
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await cryptoApi.get();
        setResult(response.data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    })();
  }, []);

  return (
    <div className="text-white mx-4 my-8">
      <h1 className="text-3xl font-semibold">{result?.chartName}</h1>
      <p className="my-4">
        Last updated at:&nbsp;{formatDate(result?.time.updated)}
      </p>
      <div className="flex items-center gap-8 mt-8">
        <CryptoCard data={result?.bpi.USD} />
        <CryptoCard data={result?.bpi.GBP} />
        <CryptoCard data={result?.bpi.EUR} />
      </div>
    </div>
  );
}

export default Crypto;
