// To begin with the homework, let's start creating and defining the SVG, its width, height and margin.

var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);


var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


  d3.csv("assets/data/data.csv").then(function(CensusData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    CensusData.forEach(function(data) {
      data.poverty = +data.poverty;
      data.smokes = +data.smokes;
      data.abbr = data.abbr;
    });


    // Step 2: Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
      .domain([20, d3.max(CensusData, d => d.poverty)])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(CensusData, d => d.smokes)])
      .range([height, 0]);

     // Step 3: Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    
        // Step 5: Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
    .data(CensusData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.poverty))
    .attr("cy", d => yLinearScale(d.smokes))
    .attr("r", "15")
    .attr("fill", "blue")
    .attr("stroke", "white")
    .attr("opacity", ".5");

    var circleText = chartGroup.selectAll(null).data(censusData).enter().append("text");

    circleText
    .attr("x", function(d) {
      return xLinearScale(d.poverty);
    })
    .attr("y", function(d) {
      return yLinearScale(d.smokes);
    })
    .text(function(d) {
      return d.abbr;
    })
    .attr("font-family", "times")
    .attr("font-size", "10px")
    .attr("text-anchor", "middle")
    .attr("fill", "black");



    // Step 6: Initialize tool tip
    // ==============================
    var toolTip = d3.tip()
      .attr("class", "tooltip")
      .offset([80, -60])
      .html(function(d) {
        return (`${d.state}<br>Poverty: ${d.poverty}<br>Smokes: ${d.smokes}`);
      });

    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("click", function(data) {
      toolTip.show(data, this);
    })
      // onmouseout event
      .on("mouseout", function(data, index) {
        toolTip.hide(data);
      });

    
    
    // Step 9: Create axes labels
    // ==============================
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 15)
      .attr("x", 0 - (height / 2))
      .attr("class", "axisText")
      .text("Smokes");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Poverty");
  }).catch(function(error) {
    console.log(error);
  });