import './App.css';
// import { Button } from 'antd-mobile'

import  {BrowserRouter as Router,Routes,Route,Navigate,useNavigate} from 'react-router-dom'



import Home from './pages/Home'
import News from './pages/News'
import Todo from './pages/Todo'
import CityList from './pages/CityList'
import PersonalCenter from './pages/PersonalCenter'
// function Todo() {
//   return <div>藏品</div>
// }
import { NavBar } from 'antd-mobile'

// function PersonalCenter() {
//   return <div>我的</div>
// }

// const back = () =>
	
// 	<Navigate to="/home/me" />
//     Toast.show({
//       content: '点击了返回区域',
//       duration: 1000,
//     })

function Allorder(){
	const navigate = useNavigate();
	return <div><NavBar onBack={() => {
            navigate(-1);
          }}>全部订单</NavBar></div>
}






function App() {
  return (
  <Router>	
  
  
    <div className="App">
	<Routes>
	<Route path="/"  element={<Navigate to='/home' />}/>
	<Route path="/home/" element={<Home/>}>
		<Route index element={<News/>}/>
		<Route path='news' element={<News/>}/>
		<Route path='box' element={<Todo/>}/>
		<Route path='me' element={<PersonalCenter/>} />		
		
	</Route>		
	<Route path="/citylist" element={<CityList/>}/>
	<Route path="/all" element={<Allorder/>}/>	
	<Route path="/todos" element={<Allorder/>}/>
	<Route path="/finishs" element={<Allorder/>}/>
	<Route path="/cancels" element={<Allorder/>}/>
	
	
	</Routes>
    </div>
	</Router>
  );
}

export default App;
