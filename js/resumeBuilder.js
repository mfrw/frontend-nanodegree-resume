/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Muhammad Falak R Wani");
var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
