import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function NetworkGraph() {
  const ref = useRef();

  useEffect(() => {
    const nodes = [
      { id: 'A' },
      { id: 'B' },
      { id: 'C' },
      { id: 'D' },
    ];
    const links = [
      { source: 'A', target: 'B' },
      { source: 'A', target: 'C' },
      { source: 'B', target: 'D' },
    ];

    const width = 400;
    const height = 300;

    const svg = d3.select(ref.current)
      .attr('width', width)
      .attr('height', height);

    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg.append('g')
      .attr('stroke', '#aaa')
      .selectAll('line')
      .data(links)
      .enter().append('line')
      .attr('stroke-width', 2);

    const node = svg.append('g')
      .attr('fill', '#3b82f6')
      .selectAll('circle')
      .data(nodes)
      .enter().append('circle')
      .attr('r', 10)
      .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        })
      );

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    });
  }, []);

  return <svg ref={ref} className="rounded-lg shadow-md bg-white"></svg>;
}
