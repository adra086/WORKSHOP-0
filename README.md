# WORKSHOP-0

## Overview: 
This workshop showed how to us the p5.js library to make interactive sketches with 2D primitive shapes (rectangle, arc, triangle etc).

## Learning Objectives: 
- Learn how to use p5.js library
- Use variables to control shape positions and properties
- Use conditionals to add interactivity
- Experiment with shapes such as triangle, line, arc, and rectangle
- Use real-time interactivity with mouseX 
- Keep notes/documentation of process and learnings
- Used noStroke() so there were no outlines. 

This project has a dynamic triangle that changes it's position based on mouse movement. 
The colour of the triangle will change between red or blue depending on it's position. 

## Process Notes: 
- Setup is a function in which createCanvas() will define the drawing area. 
- Conditionals were explored using if-else logic to change the triangles colour based on position.
    > Triangle is Red when x > width / 2
    > Triangle is Blue when x <= width / 2
    > Triangle colour dynamically changes based on position relative to canvas
- Created a triangle and learned how to specify each vertice & change its position with variables
    > Vertices were defined based on variable x & it's position follows the mouse horizontally
- The triange was kept within the canvas using mouseX as a constraint.
    > mouseX made triangle move as mouse pointer moves
