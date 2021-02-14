import React from 'react';
import { Chart } from 'react-google-charts';
import './Corona.scss';

const printChart = (item) => {
  return (
    <Chart
      width={'160px'}
      height={'140px'}
      chartType="PieChart"
      loader={<div></div>}
      data={[
        ['section', 'people'],
        ['confirmed', item.confirmed],
        ['critical', item.critical],
        ['deaths', item.deaths],
        ['recovered', item.recovered],
      ]}
      options={{
        is3D: true,
        chartArea: { width: '100%', height: '100%' },
        legend: { position: 'none' },
        title: 'Corona status',
        backgroundColor: 'transparent',
        tooltip: { trigger: 'none' },
        pieSliceTextStyle: { fontSize: 13 },
        colors: ['#b50000', '#cfb300', '#444', '#009e37'],
      }}
    />
  );
};

const formatNumber = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const printUpdateTime = (time) => {
  return <p className="corona-update">Last Update: {time.substr(0, 10)}</p>;
};

const printCorona = (item) => {
  return (
    <div className="corona-inform">
      <p>
        <span className="red">확진자</span> {formatNumber(item.confirmed)}명
      </p>
      <p>
        <span className="yellow">심각</span> {formatNumber(item.critical)}명
      </p>
      <p>
        <span className="black">사망</span> {formatNumber(item.deaths)}명
      </p>
      <p>
        <span className="green">회복</span> {formatNumber(item.recovered)}명
      </p>
    </div>
  );
};
const Corona = ({ coronaData }) => {
  return (
    <article className="corona-article">
      <p className="corona-title">Corona Information</p>
      {printUpdateTime(coronaData[0].lastUpdate)}
      <div className="corona-flex">
        <div className="corona-left">{printCorona(coronaData[0])}</div>
        <div className="corona-right">{printChart(coronaData[0])}</div>
      </div>
    </article>
  );
};

export default Corona;
