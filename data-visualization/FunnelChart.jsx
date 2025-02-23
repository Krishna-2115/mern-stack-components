import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
  datasets: [
    {
      label: 'Funnel',
      data: [100, 80, 60, 40],
      backgroundColor: ['#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe'],
    },
  ],
};

export default function FunnelChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Bar data={data} options={{
        indexAxis: 'y',
        plugins: { legend: { display: false } },
      }} />
    </div>
  );
}
