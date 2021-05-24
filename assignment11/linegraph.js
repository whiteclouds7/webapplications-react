// from: https://www.d3-graph-gallery.com/graph/line_basic.html

// set the dimensions and margins of the graph
const marginLine = { top: 10, right: 30, bottom: 30, left: 60 },
  widthLine = 800 - marginLine.left - marginLine.right,
  heightLine = 400 - marginLine.top - marginLine.bottom;

// append the svg object to the body of the page
const svgLine = d3
  .select("#linegraph")
  .append("svg")
  .attr("width", widthLine + marginLine.left + marginLine.right)
  .attr("height", heightLine + marginLine.top + marginLine.bottom)
  .append("g")
  .attr(
    "transform",
    "translate(" + marginLine.left + "," + marginLine.top + ")"
  );

//Read the data
const fillLineGraph = () => {
  console.log("fetching data");
  d3.json(
    `https://api.covid19api.com/country/austria?from=2020-03-01T00:00:00Z&to=${new Date(
      Date.now()
    ).toISOString()}`,
    (data) => {
      // Add X axis
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data, (d) => {
            return Date.parse(d.Date);
          })
        )
        .range([0, widthLine]);

      svgLine
        .append("g")
        .attr("transform", "translate(0," + heightLine + ")")
        .call(d3.axisBottom(x));

      // Add Y axis
      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data, (d) => {
            return +d.Active;
          }),
        ])
        .range([heightLine, 0]);

      svgLine.append("g").call(d3.axisLeft(y));

      // Add the line
      svgLine
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#ccccff")
        .attr("stroke-width", 1.5)
        .attr(
          "d",
          d3
            .line()
            .x((d) => {
              return x(Date.parse(d.Date));
            })
            .y((d) => {
              return y(d.Active);
            })
        );
    }
  );
};

fillLineGraph();
