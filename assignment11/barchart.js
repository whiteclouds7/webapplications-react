// from: https://www.d3-graph-gallery.com/graph/barplot_basic.html

const marginBar = { top: 30, right: 30, bottom: 70, left: 60 },
  widthBar = 460 - marginBar.left - marginBar.right,
  heightBar = 400 - marginBar.top - marginBar.bottom;

// append the svg object to the body of the page
const svgBar = d3
  .select("#barchart")
  .append("svg")
  .attr("width", widthBar + marginBar.left + marginBar.right)
  .attr("height", heightBar + marginBar.top + marginBar.bottom)
  .append("g")
  .attr("transform", "translate(" + marginBar.left + "," + marginBar.top + ")");

const fillBarChart = () => {
  console.log("fetching data");
  const active = (country) => {
    return (
      country.TotalConfirmed - country.TotalRecovered - country.TotalDeaths
    );
  };

  d3.json("https://api.covid19api.com/summary", (data) => {
    // filter by top 10 countries with active covid-19 cases
    const top = data.Countries.sort((a, b) => {
      return active(b) - active(a);
    }).slice(0, 10);

    // X axis
    const x = d3
      .scaleBand()
      .range([0, widthBar])
      .domain(
        top.map((d) => {
          return d.CountryCode;
        })
      )
      .padding(0.4);

    svgBar
      .append("g")
      .attr("transform", "translate(0," + heightBar + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([0, active(top[0])])
      .range([heightBar, 0]);
    svgBar.append("g").call(d3.axisLeft(y));

    // Bars
    svgBar
      .selectAll("mybar")
      .data(top)
      .enter()
      .append("rect")
      .attr("x", (d) => {
        return x(d.CountryCode);
      })
      .attr("y", () => {
        return y(0);
      })
      .transition()
      .duration(2000)
      .attr("y", (d) => {
        return y(active(d));
      })
      .attr("width", x.bandwidth())
      .attr("height", (d) => {
        return heightBar - y(active(d));
      })
      .attr("fill", "#ccccff");
  });
};

fillBarChart();
