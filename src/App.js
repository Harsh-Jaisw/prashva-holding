import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import DocketForm from './docketForm';
import Header from './Header';
import DocketList from './DocketList';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<DocketForm/>}></Route>
      <Route path="/DocketList" element={<DocketList/>}></Route>
    </Routes></>
  );
}

export default App;
