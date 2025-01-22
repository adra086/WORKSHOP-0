# Workshop 0: Interactive Sketch with p5.js
# Link to Workshop 0 Repository: https://github.com/adra086/WORKSHOP-0

## Overview

## This workshop demonstrated how to use the p5.js library to create interactive sketches with 2D primitive shapes such as rectangles, arcs, and triangles. The primary goal was to experiment with shape properties and add interactivity using variables and conditionals.

## Learning Objectives

- Learn how to use the p5.js library.

- Control shape positions and properties using variables.

- Add interactivity using conditionals.

- Experiment with shapes such as triangles, lines, arcs, and rectangles.

- Incorporate real-time interactivity using mouseX.

- Document the process, problem-solving, and learnings.

- Utilize noStroke() to create shapes without outlines.

## Project Description

### This project creates a dynamic triangle that:

- Changes position horizontally based on mouse movement.

- Changes color dynamically between red and blue depending on its position relative to the center of the canvas.

## Key Features

### Dynamic Positioning:

- The triangle’s x-coordinate is determined by mouseX, allowing it to follow the horizontal mouse position.

### Color Interactivity:

- The triangle changes color based on its position:

    Red when x > width / 2

    Blue when x <= width / 2

### Canvas Constraint:

- The triangle’s movement is restricted within the canvas dimensions using mouseX.

## Code Explanation

### 1. Initial Setup
#### Code Extract:

function setup() {
  createCanvas(400, 400);
}

createCanvas(400, 400); sets up a drawing area of 400x400 pixels.

#### Code Description:

The setup() function is called once at the beginning to initialize the sketch.

### 2. Drawing the Canvas and Background
#### Code Extract: 

function draw() {
  background(220);

background(220); sets a light gray background for each frame.

#### Code Descrption:

The draw() function continuously executes, refreshing the canvas to create animations or interactivity.

#### Outcome/Screenshot for 1 & 2:
![image](https://github.com/user-attachments/assets/35fd2892-4862-47fd-80f1-f8cd5ff1da78)


### 3. Tracking Mouse Movement
#### Code Extract: 

x = mouseX;

#### Code Description:
The variable x is dynamically updated to match the horizontal position of the mouse.

This ensures the triangle moves as the mouse moves horizontally

### 4. Adding Conditional Logic for Color Change
#### Code Extract:

if (x > width / 2) {
  fill(255, 0, 0);  // Red
} else {
  fill(0, 0, 255);  // Blue
}

#### Code Desription: 

if (x > width / 2) checks if the triangle’s position is past the canvas center.

fill(255, 0, 0); sets the color to red when the condition is true.

fill(0, 0, 255); sets the color to blue otherwise.

### 5. Drawing the Triangle
#### Code Extract:

noStroke();
triangle(x, 150, x + 100, 150, x + 30, 100);

#### Code Description: 

noStroke(); ensures the triangle has no outline.

triangle(x, 150, x + 100, 150, x + 30, 100); defines the triangle using three vertices:

Vertex 1: (x, 150)

Vertex 2: (x + 100, 150)

Vertex 3: (x + 30, 100)

#### Outcome/Screenshot for 3, 4, & 5:
![image](https://github.com/user-attachments/assets/9293997d-d5dd-4192-8be3-4c23b9d664bc)

![image](https://github.com/user-attachments/assets/3208c7f6-4609-4dd8-82ba-3b8164f3f183)

## Process Notes

### Setup Function:

createCanvas() was used to define the drawing area (400x400 pixels).

### Conditional Logic:

if-else statements were used to check the triangle’s position relative to the canvas center and change its color dynamically.

### Vertices Specification:

Learned how to define triangle vertices using variables.

The x-coordinate was tied to mouseX for interactivity.

### Constraint Application:

mouseX ensures the triangle stays within the canvas and moves dynamically as the mouse moves.

## Documentation Improvements

### Problem-Solving:

Initially, the triangle’s movement was not smooth due to incorrect variable usage. This was resolved by ensuring x was updated directly from mouseX.

The color change logic wasn’t working as expected. Debugging with console.log() helped verify the conditional checks.

## Helpful Resources:

- p5.js Reference Documentation

- p5.js Getting Started Guide

- Use of ChatGPT

    > ChatGPT was instrumental in troubleshooting and testing the code. For example:
        ~ Helped clarify the behavior of mouseX and how it dynamically interacts with canvas dimensions.
        ~ Suggested improvements to conditional logic for smoother interactivity.
        ~ Provided insights into how noStroke() works to remove outlines from shapes.
    This assistance enhanced my understanding of coding concepts and debugging strategies.
