var app = angular.module("studentApp");

app.service("Service",function(){
	var service = this;
	students = [{"name":"Fazil","age":37,"qualification":"MCA","address":"Bangelore"},
	  	              {"name":"Karni","age":37,"qualification":"MTech","address":"UK"},
		              {"name":"Mohammed","age":37,"qualification":"Phd","address":"US"},
		              {"name":"Khan","age":37,"qualification":"MCA","address":"Bangelore"},
		              {"name":"Faiz","age":3,"qualification":"MTech","address":"UK"},
		              {"name":"Farhan","age":6,"qualification":"Phd","address":"US"},
		              {"name":"Fyaz","age":14,"qualification":"MCA","address":"Bangelore"},
		              {"name":"Seema","age":18,"qualification":"MTech","address":"UK"},
		              {"name":"Reshu","age":23,"qualification":"Phd","address":"US"},
		              {"name":"Ruhi","age":23,"qualification":"Phd","address":"Australia"}];
	
	service.getStudents = function(){
		return students;
	}
});