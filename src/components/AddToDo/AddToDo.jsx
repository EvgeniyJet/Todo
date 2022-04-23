import React from "react"
import s from './AddToDo.module.sass';
import Button from '../Button'
import Input from "../Input/Input";

export default function AddToDo({ addToDo }) {
	const submit = e => {
		e.preventDefault();
		const { title, description } = e.target;
		addToDo(Date.now() % 100000, title.value, description.value);
		title.value = '';
		description.value = '';
	}
	return (
		<form className={s.form} onSubmit={submit} >
			<Input name="name"><p>Название</p>
				<input /></Input>
			<label className={s.field}>
				<p>Описание</p>
				<textarea name="description" id="" cols="20" rows="10"></textarea>
			</label>

			<Button />
		</form >
	)
}