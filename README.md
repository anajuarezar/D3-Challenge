# D3 Homework - Data Journalism and D3

![alt text](https://github.com/anajuarezar/D3-Challenge/blob/main/Images/solved.png)

## Core Assignment: D3 Dabbler (Required Assignment)

You need to create a scatter plot between two of the data variables such as Healthcare vs. Poverty or Smokers vs. Age.
Using the D3 techniques, create a scatter plot that represents each state with circle elements. You'll code this graphic in the app.js file of your project directory—make sure you pull in the data from data.csv by using the d3.csv function. Your scatter plot should ultimately appear like the image at the top of this section.


It must include;
1. state abbreviations in the circles.
2. Create and situate your axes and labels to the left and bottom of the chart.

## Process:

1. Using a simple html, we start by positioning the area where we will put our scatter plot, the SVG. Once this is defined, in our app.js we establish the width, height and margin. 
2. Now, we create a variable that will hold our svg. We use d3 to select the SVG from our html using ".select", then we append the svg or the scatter to this area. We also define the attributes we wrote in the step before using ".attr". 
3. Using D3, we import the data from our data folder, making a promise that will return our data now named "Census Data". Given that the next steps will use this data, they'll be inside this promise.
4. Next, it is time to parse the variables from our data using a "foreach" to go through the variables we want to change. 
5. Then, we need to scale the variables we will use to make the scatter plot. In this case, poverty and smokes. We need to define the domaine it will use, this means the minimum and maximum value in our varaibles. We also establish whether it will be use as the x axis or y axis. 
6. The previous step is necessary to define the values the axis will have, once we have done it. We create the axis using these values. 
7. Since the axis are made, we need to fill the graph with the data, meaning, we need to create the circles. We define a variable that will use D3 to call the data, using ".data" and create the circles with the function "chartGroup.selectAll("circle")", we append them and define the attributes.
8. Once the circles were created, we need to fill them with the state label. To do this, we use the function "chartGroup.selectAll(null).data(CensusData).enter().append("text")" that will use the data and append the text.
9. We need to define which variable to use as the x axis, the y axis and the text. To do this we use the ".attr" and define that we are talking about each axis and the variable it corresponds to, as for the text, we use ".text" and define it as well. 
10. Now wwe just use append to add the names to the axis.
11. Finally in order to catch and print any errors we use "catch(function(error)console.log(error"


![alt text](https://github.com/anajuarezar/D3-Data-Journalism/blob/main/Images/Captura%20de%20pantalla%20(15).png)
