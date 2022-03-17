import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from './UserForm';
import Users from './Users';

const AppRouter: FC = () => {

	return (
		<Routes>
			<Route path="/" element={<Users />} />
			<Route path="/:id" element={<Form />} />
			<Route path="*" element={<Navigate to="/" replace />} />
		</Routes>
	);
};

export default AppRouter;