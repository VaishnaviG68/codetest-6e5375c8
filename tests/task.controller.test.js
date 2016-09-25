

describe("Task Data service", function () {
  var taskService;

  beforeEach(module("taskApp"));

  beforeEach(inject(function (TaskDataService) {
    taskService = TaskDataService;
  }));

  it("Should return a empty task list at the begining" ,  function () {
    
    var tasks = taskService.getTaskList();
    expect(tasks.length).toBe(0);

  });

  it("Should can add a new test successfully" , function () {
  	var previousListSize = taskService.getTaskList().length;
  	var mockTask = {
  		description : "New sample description" , 
  		isDone : false 
  	};
  	taskService.addTask(mockTask);
  	var newTaskLength = taskService.getTaskList().length;
  	expect(newTaskLength).toBe(previousListSize + 1);

  });

  it("Should can delete a task from the task list" , function () {
  	//clear all data
  	taskService.clearTask();
  	//Add some data
  	for (var i = 0 ; i < 10 ; i++) {
  		var mockTask = {
	  		description : "New sample description " + i , 
	  		isDone : i % 2 == 0 
  		};
  		taskService.addTask(mockTask);
  	}
  	var taskLists = taskService.getTaskList();
  	//copy 2nd item to temp variable
  	var temp = taskLists[2];
  	taskService.deleteTask(temp);
 	taskLists = taskService.getTaskList();
  	expect(taskLists.indexOf(temp)).toBe(-1);
  });

});