import React, { useState } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import {useNavigate} from "react-router-dom"
import {
	FileOutline,  



  FileWrongOutline,
  ReceiptOutline,
  TextOutline
} from 'antd-mobile-icons'


 const Orders = () => {
  const tabs = [
      {
        key: 'all',
        title: '全部订单',
        icon: <FileOutline />,
        badge: Badge.dot,
      },
      {
        key: 'todos',
        title: '待付款',
        icon: <ReceiptOutline />,
        badge: '5',
      },
      {
        key: 'finishs',
        title: '已完成',
        icon: (active: boolean) =>
          active ? <TextOutline /> : <TextOutline />,
        badge: '99+',
      },
      {
        key: 'cancels',
        title: '已取消',
        icon: <FileWrongOutline />,
      },
    ]

  const [activeKey, setActiveKey] = useState('todo')
  const navigate = useNavigate()
  const setActiveKeys=(value: string) => {
	setActiveKey()
	const hvalue = '/'+value
	navigate(hvalue)
	
  }

  return (
    <div>
        <TabBar activeKey={activeKey} onChange={setActiveKeys}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
    </div>
  )
}

export default Orders