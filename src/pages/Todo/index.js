import React from "react"
import { Grid,List,Image,Card,Toast } from 'antd-mobile'

import styles from './demo1.css'

import  './index.css' 

import demoSrc2 from '../../assets/img/kong.png'

// const demoSrc2 =
//   'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'


 class Todo extends React.Component{
	 
	 render(){
		 const onClick = () => {
		     Toast.show('点击了卡片')
		   }
		 return <div className='zhengtodo'>
		 <Card className="jianbian" onClick={onClick}>
		 <Grid columns={3} gap={8}>		           
		           <Grid.Item span={3}>
		             <div className={styles['grid-demo-item-block']}><List header=''>        
        <List.Item extra='转赠记录' clickable>
          我的藏品  0
        </List.Item>
      </List></div>
		           </Grid.Item>
		 </Grid>
		 </Card>
		 
		 <Grid columns={3} gap={8}>		 
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}></div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}></div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}></div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}></div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}><Image lazy src={demoSrc2} /></div>
          </Grid.Item>
        </Grid></div>
	 }
 }
 
 export default Todo
	 


