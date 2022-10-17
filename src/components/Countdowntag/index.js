import React from "react";
import Countdown, { zeroPad } from 'react-countdown';
import { Button,Space} from 'antd-mobile'

import { ClockCircleFill } from 'antd-mobile-icons'





export default class Countdowntag extends React.Component{
	state={
		isok:false
	}
	
	render(){
		const GetDateStr = (AddDayCount)=> {
			var dd = new Date();
			dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
			var y = dd.getFullYear();
			var m = dd.getMonth()+1;//获取当前月份的日期
			var d = dd.getDate();
			var h = dd.getHours()+2;
			return +m+"-"+d+" "+h+":00";
		}
		
		const Completionist = () => <Button block size='mini' color='primary' shape='rounded'>
				          <Space><i className='icon-boxone' /><span>售卖中</span>
				          </Space>
				        </Button>;
		const renderer = ({ hours, minutes, seconds, completed }) => {
		  if (completed) {
		    // Render a completed state
		    return <Completionist />;
		  } else {
		    // Render a countdown
		    return <Button block size='mini' color='primary' shape='rounded'>
				          <Space><ClockCircleFill /><span>开售倒计时 <span className="countdownb"><b>{zeroPad(hours)}</b>:<b>{zeroPad(minutes)}</b>:<b>{zeroPad(seconds)}</b></span></span>
				          </Space>
				        </Button>;
		  }
		};
		
		const tags = (item)=>{
			console.log(item)
			if(item === 1){
				return <Completionist />
			}
			if(item == 2){
				return (<Countdown renderer={renderer} daysInHours  date={Date.now() + 60000} ><Completionist /></Countdown>)
			}
			if(item == 3){
				return (
				<Button block size='mini' color='primary' shape='rounded'>
				          <Space><i className='icon-boxone' /><span>已售罄</span>
				          </Space>
				        </Button>
				
				
				
				)
			}
			if(item == 4){
				return (
				<Button block size='mini' color='primary' shape='rounded'>
				          <Space><ClockCircleFill /><span>即将开售  {GetDateStr(2)} </span>
				          </Space>
				        </Button>
				
				
				
				)
			}
		}
		return tags(this.props.buy)
	}
}

