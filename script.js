var taskApp = angular.module('taskApp', ['ngRoute']);

// configure our routes
	taskApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/tasks.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/add', {
				templateUrl : 'pages/addtask.html',
				controller  : 'addTaskController'
			})
	});

	taskApp.service('TaskDataService', function(){
  		var taskList = [];

		this.getTaskList = function () {
			return taskList;
		}

		this.addTask = function (task) {
			taskList.push(task);
		}

		this.clearTask = function () {
			taskList = [];
		}

		this.deleteTask = function (task) {
			var index = taskList.indexOf(task);
			if (index > -1) {
			    taskList.splice(index, 1);
			}
		}
	});

	taskApp.controller('mainController', function($scope , TaskDataService) {

		$scope.taskList = TaskDataService.getTaskList();

		$scope.deleteTask = function (task) {
			TaskDataService.deleteTask(task);
		}

		$scope.refreshData = function () {
			$scope.taskList = TaskDataService.getTaskList();
		}

	});

	taskApp.controller('addTaskController', function($scope , TaskDataService) {
		$scope.task = {};
		$scope.addTask = function() {
			TaskDataService.addTask($scope.task);
			$scope.task = {};
		}
	});