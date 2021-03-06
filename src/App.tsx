import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import './App.scss';
import { UsersContext } from './context';
import AppRouter from './component/AppRouter';
import SortBar from './component/SortBar';
import { IUser } from './types';


const App: FC = () => {

	const [users, setUsers] = useState<IUser[]>([])
	const [isLoading, setLoading] = useState<boolean>(false)


	const fetchUser = async () => {
		setLoading(true)
		const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
		setUsers(response.data)
		setLoading(false)
	}



	useEffect(() => {
		fetchUser()
	}, [])

	const sortUsers = (users: IUser[], sortPath: string) => {
		switch (sortPath) {
			case 'city':
				setUsers([...users].sort((a, b) => a.address.city.localeCompare(b.address.city)))
				break
			case 'company':
				setUsers([...users].sort((a, b) => a.company.name.localeCompare(b.company.name)))
				break
		}
	}


	return (
		<UsersContext.Provider value={{ isLoading, users, sortUsers  }}>
			<div className="App">
				<SortBar />
				<AppRouter />
			</div>
		</UsersContext.Provider>

	);
}

export default App;
