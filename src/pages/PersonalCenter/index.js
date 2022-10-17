import React from "react"
import { List, Grid,Avatar,Card } from 'antd-mobile'
import {

  UserOutline,
  SetOutline,
  UserSetOutline,
CheckCircleOutline,
TeamOutline,
FillinOutline,
LinkOutline
} from 'antd-mobile-icons'

import  './index.css' 

import styles from './demo1.css'
import Orders from "../../components/Orders"

 class PersonalCenter extends React.Component{
	 
	 render(){	 
		 
		 return <div className="zhengcenter">
		 
		 <Grid columns={3} gap={0}>
		           <Grid.Item>
		             <div className={styles['grid-demo-item-block']}></div>
		           </Grid.Item>
		           <Grid.Item span={2}>
		             <div className={styles['grid-demo-item-block']}></div>
		           </Grid.Item>
		           <Grid.Item span={2}>
		             <div className={styles['grid-demo-item-block']}></div>
		           </Grid.Item>
		           <Grid.Item>
		             <div className={styles['grid-demo-item-block']}><SetOutline fontSize={22} color='#acb1b2'/></div>
		           </Grid.Item>
		           <Grid.Item span={3}>
		             <div className={styles['grid-demo-item-block']}></div>
		           </Grid.Item>
		         </Grid>
		 
				<List>
				          <List.Item
				            prefix={<Avatar src="" />}
				            description='请登录'
				          >
				            登录/注册
				          </List.Item>
				        </List>
						
						
				<Card >
					<Orders />
				</Card>		
		
		 		 
		      <List >
		        <List.Item extra="0" prefix={<UserOutline />} onClick={() => {}}>
		          邀请人数
		        </List.Item>
		        <List.Item extra='去认证' prefix={<UserSetOutline />} onClick={() => {}}>
		          实名认证
		        </List.Item>
		        <List.Item prefix={<CheckCircleOutline />} onClick={() => {}}>
		          账号安全
		        </List.Item>
				<List.Item prefix={<LinkOutline />} onClick={() => {}}>
				  分享好友
				</List.Item>
				<List.Item prefix={<TeamOutline />} onClick={() => {}}>
				  加入社团
				</List.Item>
				<List.Item prefix={<FillinOutline />} onClick={() => {}}>
				  问题反馈
				</List.Item>
		      </List>
		 
		 </div>
		 
		  
		 
		 
		 
	 }
 }
 
 export default PersonalCenter