// To begin with the homework, let's start creating and defining the SVG, its width, height and margin.
// Step 1: Define the SVG area
// ==============================

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

// Step 2: Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
// ==============================

var svg = d3
  .select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);


var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);


// Step 3: We import our data
// ==============================

  d3.csv("assets/data/data.csv").then(function(CensusData) {

    // Step 4: Parse var as numbers
    // ==============================
    CensusData.forEach(function(data) {
      data.poverty = +data.poverty;
      data.smokes = +data.smokes;
      data.abbr = data.abbr;
    });


    // Step 5: Create scale functions using the min and max to define a custom scale for our data
    // ==============================
    var xLinearScale = d3.scaleLinear()
      .domain([d3.min(CensusData, d => d.poverty)*.95, d3.max(CensusData, d => d.poverty)])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([d3.min(CensusData, d => d.smokes)*.92, d3.max(CensusData, d => d.smokes)])
      .range([height, 0]);

     // Step 6: Let's define the axes functions using the Scale we did before
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Step 7: We append and call the axes
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    
    // Step 8: Time to create and fill the circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
    .data(CensusData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.poverty))
    .attr("cy", d => yLinearScale(d.smokes))
    .attr("r", "15")
    .attr("fill", "MediumPurple")
    .attr("stroke", "Lavender")
    .attr("opacity", ".5");

    // Step 9: We must fill the circles with the states' abbr
    // ==============================

    var circleLabels = chartGroup.selectAll(null).data(censusData).enter().append("text");

    circleLabels
    .attr("x", function(d) {
      return xLinearScale(d.poverty);
    })
    .attr("y", function(d) {
      return yLinearScale(d.smokes);
    })
    .text(function(d) {
      return d.abbr;
    })
    .attr("font-family", "serif")
    .attr("font-size", "10px")
    .attr("text-anchor", "middle")
    .attr("fill", "white");

    // Step 10: We name our axes
    // ==============================

    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y",300)
      .attr("x",200)
      .attr("class", "axisText")
      .text("Smokes");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Poverty");

    
    // Step 11: We use this function to catch any erros and print them
    // ==============================


  }).catch(function(error) {
    console.log(error);
  });