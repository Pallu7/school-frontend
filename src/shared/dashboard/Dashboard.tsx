import { ReactElement } from 'react'
import './Dashboard.scss'
import DashLeft, { INavMenu } from './DashLeft'

interface IDashboardProps {
	sidebarMenus: INavMenu[]
	content: ReactElement
}

const Dashboard = (props: IDashboardProps) => {

  const { sidebarMenus, content } = props

	return (
		<div className='dashboard'>
			<DashLeft navMenus={sidebarMenus}/>
      {content}
		</div>
	)
}

export default Dashboard
