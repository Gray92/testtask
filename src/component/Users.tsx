import { FC, useContext } from "react";
import { UsersContext } from "../context";
import { Spiner } from "../Spiner";
import { IUser } from "../types";
import UserCard from "./UserCard";


const Users: FC = () => {

	const { isLoading, users } = useContext(UsersContext)

	return (
		<main>
			<h2>Список пользователей</h2>
			{
				isLoading
					?
					<Spiner/>
					:
					<div className="list">
						{users.map((user: IUser) => <UserCard
							key={user.id}
							id={user.id}
							name={user.name}
							city={user.address.city}
							company={user.company.name}
						/>)
						}
					</div>
			}

			<div className="counter">
				Найдено {users.length} пользователей
			</div>
			

		</main>
	);
}

export default Users;