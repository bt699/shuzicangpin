import React, { FC }  from "react"
import {useNavigate,useLocation,Outlet} from "react-router-dom"
import styles from './demo2.less'
import  './home.css'

import { TabBar} from 'antd-mobile'



const Bottom: FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  console.log(pathname);

  const setRouteActive = (value: string) => {
	  console.log(value);
    navigate(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <i className="icon-homeone" />,
    },
    {
      key: '/home/box',
      title: '藏品',
      icon: <i className='icon-boxone' />,
    },
    
    {
      key: '/home/me',
      title: '我的',
      icon: <i className='icon-meone' />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

// const demoSrc2 =
//   'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'

// const onClick = () => {
//     Toast.show('点击了卡片')
//   }

class Home extends React.Component{
	render(){
		return(
		    
			<div className={styles.app}>
			
			<div className={styles.body}>
				<Outlet/>	
			</div>
				
			
			
			<div className={`home ${styles.bottom}`}>
			          <Bottom />
			</div>
			</div>
			
		
		)
		
	}
}





export default Home