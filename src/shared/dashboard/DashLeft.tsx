import './Dashboard.scss'
import smartschool from '../../assets/images/smartschool.png'



export interface INavMenu {
    id: string,
    class: string
}

interface IDashboardProps {
    navMenus: INavMenu[]
}


const DashLeft = (props: IDashboardProps) => {

    const {navMenus} = props    
	return (
		<div className='dash-left'>
			<div className='left-img'>
				<div className='left-img-container'>
					<img src={smartschool} alt=' ' />
					School
				</div>
			</div>

			<div className='left-main'>
				<div className='left-main-container'>
					<div className='dashboard-title'>Dashboard</div>
					<ul className='dash-lists'>
						{navMenus.map((clas, key) => (
							<li key={key} id={clas.id}>
								{' '}
								{clas.class}
							
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default DashLeft
