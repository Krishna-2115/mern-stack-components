import { PolarArea } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [11, 16, 7],
      backgroundColor: ['#ef4444', '#3b82f6', '#facc15'],
    },
  ],
};

export default function PolarAreaChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <PolarArea data={data} />
    </div>
  );
}
