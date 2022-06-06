import React from 'react'
import { Link } from 'react-router-dom'
// import cards from './DashRight'

interface ICards {
	title: string
	description: string
	icon: any
	link: string
}

const DashCard = (props: ICards) => {
	const { title, description, icon, link } = props

	return (
		<Link className='dash-card' to={link}>
			<div className='dash-card-container'>
			<div className='icon'>{icon}</div>
				<div className='dash-title'>{title}</div>
				<div className='dash-description'>{description}</div>
			</div>
		</Link>
	)
}

export default DashCard
