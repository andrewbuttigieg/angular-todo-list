

    angular.module('todoApp', [])
      .controller('TodoListController', function() {
        var todoList = this;
        todoList.todos = [
          {text:'learn angular', done:true},
          {text:'build an angular app', done:false}];
     
        todoList.addTodo = function() {
	  if( todoList.todoText.length > 0){
            todoList.todos.push({text:todoList.todoText, due: todoList.todoDue, done:false});
            todoList.todoText = '';
            todoList.todoDue = '';
	  }
        };
     
        todoList.remaining = function() {
          var count = 0;
          angular.forEach(todoList.todos, function(todo) {
            count += todo.done ? 0 : 1;
          });
          return count;
        };
     
        todoList.archive = function() {
          var oldTodos = todoList.todos;
          todoList.todos = [];
          angular.forEach(oldTodos, function(todo) {
            if (!todo.done) todoList.todos.push(todo);
          });
        };
      });


