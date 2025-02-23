import { Bubble } from 'react-chartjs-2';

const data = {
  datasets: [
    {
      label: 'Bubble Dataset',
      data: [
        { x: 20, y: 30, r: 15 },
        { x: 40, y: 10, r: 10 },
      ],
      backgroundColor: '#3b82f6',
    },
  ],
};

export default function BubbleChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Bubble data={data} />
    </div>
  );
}
