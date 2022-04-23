import React, { useState } from 'react'
import s from './Todos.module.sass';
import ToDoList from '../ToDoList';
import AddToDo from '../AddToDo';

export default function ToDos() {
	const [todo, setTodo] = useState([
		{ id: 1, title: 'Бег', description: 'не очень люблю' },
		{ id: 2, title: 'велосипед', description: 'люблю' },
		{ id: 3, title: 'Лыжи', description: ' не люблю' },
		{ id: 4, title: 'Сноуборд', description: ' очень люблю' }
	]);
	const addToDo = (id, title, description) => {
		setTodo(prev => [...todo, { id, title, description }]);
	};
	const deleteTodo = id => {
		setTodo(prev => prev.filter(t => t.id !== id));
	}
	return (
		<div className={s.todos}>
			<h1>Дела на сегодня!</h1>
			<p>Терпение и труд все, я устал сегодня!</p>
			<AddToDo addToDo={addToDo} />
			<ToDoList todo={todo} deleteTodo={deleteTodo} />

		</div>
	)
}
