import { FC, useContext } from "react";
import { UsersContext } from "../context";

const SortBar: FC = () => {
	const {users, sortUsers} = useContext(UsersContext)

	return (
		<nav>
			<div className="wrapper">
				<p>Сортировка</p>
				<button className="option" onClick={()=>sortUsers(users, 'city')}>по городу</button>
				<button className="option" onClick={()=>sortUsers(users), 'company'}>по компании</button>			
			</div>
		</nav>
	);
}

export default SortBar;
