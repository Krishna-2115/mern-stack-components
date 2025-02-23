import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Heatmap() {
  const ref = useRef();

  useEffect(() => {
    const data = [
      [10, 20, 30],
      [20, 30, 40],
      [30, 40, 50],
    ];

    const svg = d3.select(ref.current)
      .attr('width', 300)
      .attr('height', 300);

    const colorScale = d3.scaleSequential(d3.interpolateBlues)
      .domain([10, 50]);

    svg.selectAll()
      .data(data.flat())
      .enter()
      .append('rect')
      .attr('x', (_, i) => (i % 3) * 100)
      .attr('y', (_, i) => Math.floor(i / 3) * 100)
      .attr('width', 100)
      .attr('height', 100)
      .attr('fill', d => colorScale(d));
  }, []);

  return <svg ref={ref} className="rounded-lg shadow-md bg-white"></svg>;
}
