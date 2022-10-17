import React from 'react'

import { Button,Space,Image,List ,Badge } from 'antd-mobile'
// import {  } from 'antd-mobile-icons'

import './index.css'
import Countdowntag from '../Countdowntag'

// import box1 from '../../assets/img/box2.jpg'

 // const demoSrc2 =
 //   'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'




export default class Homelists extends React.Component{
	
	render(){
		return(
		<div >
		<div className='listimg'>
		  <Image height={this.props.loadFlag?300:''} lazy src={this.props.list.box} style={{ borderRadius: 20 }}/>
		  <div className='icon'><Countdowntag buy={this.props.list.buy}/>	</div>
		</div>
		<div className='listtext'>
		<List>
		
		<List.Item   title={this.props.list.title} description={this.props.list.description} >
		          
				  <div className="listbutton">
				  <div className="xl">
				  				 
				  <Badge content='限量' />
				  							
				  </div>
				  
							<div className="button">
							<Badge content={`${this.props.list.num}份`} />
												
							</div>
							
				  </div>
				  <div className='arrlow'>￥{this.props.list.price}</div>
		        </List.Item>
		</List>
		<div className='img'><Image
            src={this.props.list.comlogo}
            width={12}
            height={12}
            fit='cover'
            style={{ borderRadius: 32 }}
          /></div>
		  
		</div>
		
		</div>
		  
		)
	}
}