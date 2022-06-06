import React from 'react'
import'../../shared/dashboard/Dashboard.scss';
import { FaSchool, FaChalkboard,FaBookOpen, FaChalkboardTeacher, FaUsers, FaMoneyBill, FaIdCard, FaPen } from 'react-icons/fa';
import smartschool from '../../assets/images/smartschool.png';
import DashCard from '../../shared/dashboard/DashCard';



const Home=() => {
 
    const cards=[
    {id:1,icon:<FaSchool/>,title:"School Profile",desc:"Detail school information of school", link: 'school-profile'},
	{id:2,icon:<FaChalkboard/>,title:"Classes",desc:"Manage classes of school", link: 'classes'},
	{id:3,icon:<FaBookOpen/>,title:"Subjects",desc:"Organize subjects taught", link: 'school-profile'},
	{id:4,icon:<FaChalkboardTeacher/>,title:"Teacher",desc:"Register teachers information", link: 'school-profile'},
	{id:5,icon:<FaPen/>,title:"Exam",desc:"Manage school examination", link: 'school-profile'},
	{id:6,icon:<FaIdCard/>,title:"Id Template",desc:"Design the ID card templates", link: 'school-profile'},
	{id:7,icon:<FaMoneyBill/>,title:"Fee Category",desc:"Add fee categories", link: 'school-profile'},
	{id:8,icon:<FaUsers/>,title:"Sponsor",desc:"Register sponsors for students", link: 'school-profile'},

    ]
  return ( <div className='dash-right'>
        <div className='dash-top'>
          <div className="img-container">
          <img src={smartschool} alt="" />
          </div>
            
        </div>
        <div className="dash-body">
         {cards.map((card,key)=>(<DashCard key={key} title={card.title} description={card.desc} icon={card.icon} link={card.link}/>))}
        </div>
    </div>

  )
}

export default Home