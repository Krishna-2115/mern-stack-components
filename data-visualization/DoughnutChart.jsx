import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#ef4444', '#3b82f6', '#facc15'],
    },
  ],
};

export default function DoughnutChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Doughnut data={data} />
    </div>
  );
}
