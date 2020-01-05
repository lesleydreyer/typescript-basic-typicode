import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interface used to define structure of an object
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then(response => {
	console.log(response.data);
	const todo = response.data as Todo;

	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logTodo(id, title, completed);
});

// by adding :number, :string, etc if you accidentally passed them in the wrong order above like logTodo(id, completed, title) it would give you a ts underline to let you know you're passing in the wrong type
const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`
  	The Todo with ID: ${id}
  	Has a title of: ${title}
  	Is it finished? ${completed}
  `);
};

// run tsc index.ts will compile index.ts into index.js
// then you can run node index.js to run the js file
// ts-node index.ts will do both of those in 1 step

// TYPE - easy way to refer to different properties & functions a value has so Todo is a type
// type string examples - 'hi there' "" 'Today is Monday'
// type number examples - .0025 -20 40000
// type boolean examples - true false
// type Date example - new Date()
// type Todo example - { id: 1, completed: true, title: "Trash" }

// Primitive Types - number, boolean, void, undefined, string, symbol, null
// Object Types - functions, arrays, classes, objects

// types are used by Typescript Compiler to analyze code for errors
// types allow other engineers to understand what values are flowing around in codebase
