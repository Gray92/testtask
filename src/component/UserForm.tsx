import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { UsersContext } from '../context';
import { IUser } from '../types';


const UserForm = () => {
	
	//Поиск User'a по id в контексте
	const {users} = useContext(UsersContext)
	
	const location = useLocation();
	const userId = Number(location.pathname[1])
	
	const onlyUser = users.find((user:IUser) => user.id === userId)
	

	//Блокировка формы
	const [disabled, setDisabled] = useState(true)
	const edit = (isEdit: boolean) => setDisabled(false)


	//Настройка react-hook-form
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm({
		mode: "onChange"
	});

	useEffect(() => {
		setValue("name", onlyUser.name)
		setValue("username", onlyUser.username)
		setValue("email", onlyUser.email)
		setValue("street", onlyUser.address.street)
		setValue("city", onlyUser.address.city)
		setValue("zip_code", onlyUser.address.zipcode)
		setValue("phone", onlyUser.phone)
		setValue("website", onlyUser.website)
	}, [])

	const onSubmit = (data: object) => console.log(JSON.stringify(data));

	return (

		<main>
			<header>
				<h2>Список пользователей</h2>
				<button onClick={() => edit(false)} className="option">Редактировать</button>
			</header>

			<form onSubmit={handleSubmit(onSubmit)}>

				<label htmlFor="name" >Name</label>
				<input disabled={disabled}   {...register('name', { required: true })} className={(errors?.name ? 'valid' : '')} />

				<label htmlFor="username">User name</label>
				<input disabled={disabled} {...register('username', { required: true })} className={(errors?.username ? 'valid' : '')} />

				<label htmlFor="email">Email</label>
				<input disabled={disabled} {...register('email', { required: true })} className={(errors?.email ? 'valid' : '')} />

				<label htmlFor="street">Street</label>
				<input disabled={disabled} {...register('street', { required: true })} className={(errors?.street ? 'valid' : '')} />

				<label htmlFor="city">City</label>
				<input disabled={disabled} {...register('city', { required: true })} className={(errors?.city ? 'valid' : '')} />

				<label htmlFor="zip_code">Zip code</label>
				<input disabled={disabled} {...register('zip_code', { required: true })} className={(errors?.zip_code ? 'valid' : '')} />

				<label htmlFor="phone">Phone</label>
				<input disabled={disabled} {...register('phone', { required: true })} className={(errors?.phone ? 'valid' : '')} />

				<label htmlFor="website">Website</label>
				<input disabled={disabled} {...register('website', { required: true })} className={(errors?.website ? 'valid' : '')} />

				<label htmlFor="comment">Comment</label>
				<input disabled={disabled} {...register('comment')} />

				<div className="counter">
					<input disabled={disabled} type="submit" className={disabled ? 'disabled' : "submit"} />
				</div>
			</form>

		</main>

	);
}

export default UserForm;