import ReactSpeedometer from "react-d3-speedometer";

export default function GaugeChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <ReactSpeedometer
        maxValue={100}
        value={70}
        needleColor="#ef4444"
        startColor="#3b82f6"
        segments={5}
        endColor="#bfdbfe"
      />
    </div>
  );
}
