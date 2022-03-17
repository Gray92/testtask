import { FC, useContext } from "react";
import { UsersContext } from "../context";

const SortBar: FC = () => {
	const {users, sortUsersCity, sortUsersCompany} = useContext(UsersContext)

	return (
		<nav>
			<div className="wrapper">
				<p>Сортировка</p>
				<button className="option" onClick={()=>sortUsersCity(users)}>по городу</button>
				<button className="option" onClick={()=>sortUsersCompany(users)}>по компании</button>			
			</div>
		</nav>
	);
}

export default SortBar;