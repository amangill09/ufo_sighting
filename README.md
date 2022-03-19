# UFOs
# **UFO Sightings with JavaScripts**

**Note:**
I worked with Puneeth for this challenge. We followed pair-programming methodology and the code and readme was co-created.

## **Purpose of analysis**

### ***This analysis is performed to enhance the understanding of following JavaScript concepts:***

1. Explain the strengths and weaknesses of JavaScript "standard" and JavaScript version ES6+.
2. Describe JavaScript syntax and ideal use cases.
3. Build and deploy JavaScript functions, including built-in functions.
4. Convert JavaScript functions to arrow functions.
5. Build and deploy forEach (JavaScript for loop).
6. Create, populate, and dynamically filter a table using JavaScript and HTML

## **Overview of the analysis:**

The UFO sighting data was provided in the form of a .js file, containing structured data, We used JavaScript's ES6+ nomenclature and functionality along with HTML and CSS to present the data in an easy to read format, providing filtering functionality by:
- Date of occurrence
- City
- State
- Country
- Shape

## **Results**

The results are accessed by opening index.html. 
![UFO Data](https://github.com/pnimma01/UFOs/blob/db163a431c90eee3fbc684aa1a20806e04e8de90/Challenge/static/images/Landing.png)

The initial wed page will display all the data, along with the filters showing default values (these values help the user input)

State Filter:

![State Filter](https://github.com/pnimma01/UFOs/blob/db163a431c90eee3fbc684aa1a20806e04e8de90/Challenge/static/images/State_Filter.png)

City Date Filter:

![City_Date Filter](https://github.com/pnimma01/UFOs/blob/db163a431c90eee3fbc684aa1a20806e04e8de90/Challenge/static/images/Date_City_Filter.png)


## **Summary**

Using JavaScript, HTML and CSS we were able to present the data in an easy to read, tabular format with the ability to filter the data quickly based on date, city, state, country and the shape. This functionality provides the user with much needed readability and flexibility to filter.

## ***Drawbacks***

This application is a great use case for presenting the data in easy to read format, but comes with following drawbacks:
1. The date formats are not flexible - user must use the format 'm/d/yyyy'
2. The names of city, state and other filters need to exactly match the data.

## **Recommendations**

It would be great addition to have the following functionality added to the application:
1. Add flexibility to add dates and other filters in more free format (eg: 01/01/20 for dates, benton/Benton for city, CA/California for state etc).
2. Add date ranges to the criteria to filter for occurrence within a range.
3. Add Summaries by State, Month etc.