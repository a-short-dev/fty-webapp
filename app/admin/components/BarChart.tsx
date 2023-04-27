import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: any[];
  }>({
    labels: [],
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Revenue One",
          data: [11100, 2000, 5000, 51000, 40000, 1000, 5500],
          backgroundColor: "rgb(75, 192, 192)",
          stack: "Stack 0",
        },
      ],
    });

    setChartOptions({
      plugins: {
        title: {
          display: true,
          text: "Daily Revenue",
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    });

    return () => {};
  }, []);

  return (
    <div
      className="
		w-full 
		md:col-span-2 
		relative lg:h-[70vh] 
		h-[50vh]
		m-auto
		p-4 border 
		rounded-lg 
		bg-white
		"
    >
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
