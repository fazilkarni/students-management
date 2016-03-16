var app = angular.module("studentApp");




app.controller("ListController", function(Service){
	var main = this;
	main.students= Service.getStudents();
});