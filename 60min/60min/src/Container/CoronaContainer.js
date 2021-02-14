import React, { useState, useEffect, useCallback } from "react";
import dotenv from "dotenv";
import Loading from "../components/Loading/Loading";
import "./MainNewsContainer.scss";
import Error from "../components/Error/Error";
import Corona from "../components/News/Corona";
dotenv.config();

const CoronaContainer = () => {
  const [data, setData] = useState(null);

  const fetchCoronaAPI = useCallback(async () => {
    await fetch(
      "https://covid-19-data.p.rapidapi.com/country/code?format=json&code=KR",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_CORONA_KEY,
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    fetchCoronaAPI();
  }, []);

  return (
    <div className="corona">
      {data === null ? (
        <Loading />
      ) : data === undefined ? (
        <Error />
      ) : (
        <Corona coronaData={data} />
      )}
    </div>
  );
};

export default CoronaContainer;
