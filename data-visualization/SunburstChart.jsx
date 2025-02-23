import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { partition, hierarchy } from 'd3-hierarchy';

export default function SunburstChart() {
  const ref = useRef();

  useEffect(() => {
    const data = {
      name: 'root',
      children: [
        { name: 'A', value: 100 },
        { name: 'B', value: 300 },
        { name: 'C', value: 200 },
      ],
    };

    const width = 400;
    const radius = width / 2;

    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', width)
      .append('g')
      .attr('transform', `translate(${radius},${radius})`);

    const root = hierarchy(data)
      .sum(d => d.value);

    const partitionLayout = partition().size([2 * Math.PI, radius]);
    partitionLayout(root);

    const arc = d3.arc()
      .startAngle(d => d.x0)
      .endAngle(d => d.x1)
      .innerRadius(d => d.y0)
      .outerRadius(d => d.y1);

    svg.selectAll('path')
      .data(root.descendants())
      .enter().append('path')
      .attr('d', arc)
      .attr('fill', d => d3.interpolateCool(d.value / 300 || 0));
  }, []);

  return <svg ref={ref} className="rounded-lg shadow-md bg-white"></svg>;
}
