import { useState } from 'react';
import Chart from 'react-apexcharts';
import "./card.css"

function ReportCharts() {
  const [data] = useState({
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 82, 56],
      },
      {
        name: 'Revenue',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
      {
        name: 'Customers',
        data: [15, 11, 32, 18, 9, 24, 11],
      },
    ],
    options: {
      chart: {
        height: 300,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ['#415af1', '#0DAFA8', '#6F2786'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.4,
          opacityTo: 0.5,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19T00:00:00.000Z',
          '2018-09-19T01:30:00.000Z',
          '2018-09-19T02:30:00.000Z',
          '2018-09-19T03:30:00.000Z',
          '2018-09-19T04:30:00.000Z',
          '2018-09-19T05:30:00.000Z',
          '2018-09-19T06:30:00.000Z', // Added an additional time stamp to match the series data length
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return (
      <div className="chart-container" >
      <Chart
        options={data.options}
        series={data.series}
        type={data.options.chart.type}
        height={data.options.chart.height}
      />
    </div>
  );
}

export default ReportCharts;
