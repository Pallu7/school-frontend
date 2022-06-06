import { Navigate, Route, Routes } from 'react-router-dom'
import Classes from '../modules/classes/pages/Classes'
import Home from '../modules/home'
import School from '../modules/school'
import Dashboard from '../shared/dashboard/Dashboard'
import { INavMenu } from '../shared/dashboard/DashLeft'

interface PrivateRoutesProps {
	isLoggedIn: boolean
}

const PrivateRoute = (props: PrivateRoutesProps) => {
	const { isLoggedIn } = props
	const routeToAuth = 'auth'

	const classes: INavMenu[] = [
		{ id: '1', class: 'Nursery' },
		{ id: '2', class: 'KG' },
		{ id: '3', class: 'One' },
		{ id: '4', class: 'Two' },
		{ id: '5', class: 'Three' },
		{ id: '6', class: 'Four' },
		{ id: '7', class: 'Five' },
		{ id: '8', class: 'Six' },
		{ id: '9', class: 'Seven' },
		{ id: '10', class: 'Eight' },
		{ id: '11', class: 'Nine' },
		{ id: '12', class: 'Ten' },
	]

	return (
		<Dashboard sidebarMenus={classes} content={<Routes>
			{/* {role === ROLES.ADMIN && (
        <Route path='/*' element={<SuperUserRoutes />} />
			)}
			{role === ROLES.TEACHER && (
				<Route path='/*' element={<Teacher />} />
			)}
    	{role === ROLES.ACCOUNTANT && (
				<Route path='/*' element={<Accountant />} />
			)} */}
			<Route path='/' element={<Home />} />
			<Route path='/school-profile/*' element={<School />}/>
			<Route path='/classes/*' element={<Classes/>}/>
			<Route
				path='*'
				element={isLoggedIn ? <p>Not Found</p> : <Navigate to={routeToAuth} />}
			/>
		</Routes>} />
	)
}

export default PrivateRoute
