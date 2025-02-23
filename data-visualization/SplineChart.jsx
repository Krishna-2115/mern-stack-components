import React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryTooltip, VictoryVoronoiContainer } from 'victory';

const data = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
];

export default function SplineChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <VictoryChart theme={VictoryTheme.material} containerComponent={<VictoryVoronoiContainer />} >
        <VictoryLine
          interpolation="natural"
          data={data}
          style={{
            data: { stroke: "#3b82f6" },
          }}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
    </div>
  );
}
