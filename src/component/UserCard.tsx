import { FC } from "react";
import { Link } from "react-router-dom";

interface UserCardProps {
	id: number
	name: string,
	city: string,
	company: string
}

const UserCard: FC<UserCardProps> = ({id, name, city, company}) => {
	
	return (
		<div className="card">
			<div className="card__bio">
				<div className="card__bio_item">ФИО: <span>{name}</span></div>
				<div className="card__bio_item">город: <span>{city}</span></div>
				<div className="card__bio_item">компания: <span>{company}</span></div>
			</div>
			<Link to={`/${id}`}>Подробнее</Link>
		</div>
	);
}

export default UserCard;