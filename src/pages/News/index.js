import React from "react"
import { Grid,Image,Button,Card, Toast,Skeleton   } from 'antd-mobile'

import Homelists from '../../components/Homelists'

import styles from './demo2.less'

import logo1 from '../../assets/img/logo1.jpg'



import ad from '../../assets/img/ad.jpg'


import  './home.css' 
 
 
  
 // const demoSrc2 =
 //   'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
 
 const onClick = () => {
     Toast.show('点击了卡片')
   } 
  
  const newlist = [{
	  box:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
,
	buy:1,
	num:9999,
	price:92.9,
	title:'齐白石-鱼虾欢戏图1',
	description:'东风数字藏品有限公司1',
	comlogo:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
	
	
  },{
	  box:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
,
	buy:2,
	num:6666,
	price:83.9,
	title:'齐白石-鱼虾欢戏图2',
	description:'东风数字藏品有限公司2',
	comlogo:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
	
	
  },{
	  box:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
,
	buy:3,
	num:6666,
	price:83.9,
	title:'齐白石-鱼虾欢戏图2',
	description:'东风数字藏品有限公司2',
	comlogo:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
	
	
  },{
	  box:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
,
	buy:4,
	num:6666,
	price:83.9,
	title:'齐白石-鱼虾欢戏图2',
	description:'东风数字藏品有限公司2',
	comlogo:'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'
	
	
  }]
  
  
  
  
  
  
 class News extends React.Component{
	 
	 state = {
	 	loadFlag:true
	 } 
	 
	 handleOnload=()=>{
		 console.log('ok');
		 this.setState({
			 loadFlag:false
		 })
	 }
	 
	 copyArr(arr,num){
	 	  let res=[]
	 	  for(let i=0;i<num;i++){
	 		  res.push(...arr)
	 	  }
	 	  return res
	 }
	 
	 
	 
	 rendnewlists(){
		 const newlists = this.copyArr(newlist,5)
		 return newlists.map(item=><Grid.Item span={3}>
						    <div className='grid-demo-item-block'><Card onClick={onClick}><Homelists list={item} loadFlag={this.state.loadFlag} /></Card></div>
						  </Grid.Item>)
	 }
	 
	
	 
	render(){
		const loadFlag = this.state.loadFlag
		return <div className='zheng'><div className={styles.top}>
				<Grid columns={3} gap={8}>
				          <Grid.Item>
				            <div className='grid-demo-item-block logo'>{loadFlag?<Image height={100} onLoad={this.handleOnload} lazy src={logo1} />:<Image onLoad={this.handleOnload} lazy src={logo1} />}</div>
				          </Grid.Item>
				          <Grid.Item span={2}>
				            <div className={{display:'none'}}></div>
				          </Grid.Item>
						  <Grid.Item span={3}>
						    <div className='grid-demo-item-block'><Image height={loadFlag?100:''} lazy src={ad} /></div>
						  </Grid.Item>
				          <Grid.Item span={1}>
				            <div className='grid-demo-item-block titlehome'><Button color='primary' fill='none'>
            数字藏品
          </Button></div>
				          </Grid.Item>
				          <Grid.Item>
				            <div className={{display:'none'}}></div>
				          </Grid.Item>
						  
						  {this.rendnewlists()}
				          
				        </Grid>
			</div></div>
	}
}

export default News