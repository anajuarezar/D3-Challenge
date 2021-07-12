# D3 Homework - Data Journalism and D3

![alt text](https://github.com/anajuarezar/D3-Challenge/blob/main/Images/ScatterPlot.png)

## Core Assignment: D3 Dabbler (Required Assignment)

You need to create a scatter plot between two of the data variables such as Healthcare vs. Poverty or Smokers vs. Age.
Using the D3 techniques we taught you in class, create a scatter plot that represents each state with circle elements. You'll code this graphic in the app.js file of your homework directory—make sure you pull in the data from data.csv by using the d3.csv function. Your scatter plot should ultimately appear like the image at the top of this section.


It must include;
1. state abbreviations in the circles.
2. Create and situate your axes and labels to the left and bottom of the chart.

## Process:

1. Define the SVG area.
2. Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
3. We import our data
4. Parse variables as numbers
5. Create scale functions using the min and max to define a custom scale for our data
6. Let's define the axes functions using the Scale we did before
7. We append and call the axes
8. Time to create and fill the circles
9. We must fill the circles with the states' abbr
10. We name our axes
11. We use this function to catch any erros and print them
