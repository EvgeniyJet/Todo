import React from "react"
import s from './Input.module.sass';

export default function Input({ children, name, ...props }) {

	return (
		<label className={s.field}>{children}
		</label>
	)
}