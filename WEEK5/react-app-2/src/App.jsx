import Navbar from "./components/Navbar.jsx"
import './App.css'
import UserList from "./components/UserList.jsx";
import Footer from "./components/Footer.jsx";

function App(){
  
  //staet
  //return
  return(
    <div>
      <Navbar />
      <UserList/>
      <Footer/>
    </div>
  );
}

export default App;