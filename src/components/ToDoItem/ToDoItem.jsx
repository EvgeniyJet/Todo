import React from 'react';
import Button from '../Button';
import s from './ToDoItem.module.sass'
export default function TodoItem({ id, title, description, deleteTodo }) {
	return (
		<div className={s.item} >
			<p>
				Номер: {id}
			</p>
			<p>
				Наименование: {title}
			</p>
			<p>
				Описание: {description}
			</p>

			<Button style={{ width: "20px", height: "20px" }} onClick={() => deleteTodo(id)}>X</Button>
		</div>
	);
}


