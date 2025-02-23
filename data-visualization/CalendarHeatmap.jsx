import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function CalendarHeatmap() {
  const ref = useRef();

  useEffect(() => {
    const width = 400;
    const height = 150;
    const data = Array.from({ length: 30 }, (_, i) => ({
      date: new Date(2025, 0, i + 1),
      value: Math.floor(Math.random() * 100),
    }));

    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    const cellSize = 20;
    const color = d3.scaleSequential(d3.interpolateOranges)
      .domain([0, 100]);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', cellSize)
      .attr('height', cellSize)
      .attr('x', (_, i) => (i % 10) * (cellSize + 2))
      .attr('y', (_, i) => Math.floor(i / 10) * (cellSize + 2))
      .attr('fill', d => color(d.value));
  }, []);

  return <svg ref={ref} className="rounded-lg shadow-md bg-white"></svg>;
}
