import React from 'react';

import MainPage from './Pages/MainPage';
import { Link } from 'react-router-dom';
import Toolbar from './Components/Toolbar';
import SideDrawer from './Components/SideDrawer';
import BackDrop from './Components/BackDrop';

   class App extends React.Component {
     state ={
      sideDrawerOpen : false
     };
    drawerToggleClickHandler =() => {
      this.setState((prevState) =>{
        return{sideDrawerOpen: !this.state.sideDrawerOpen};
      });
    };

    backdropClickHandler = () => {
      this.setState({sideDrawerOpen:false});
    };
    render() {
      
      let backdrop;

      if(this.state.sideDrawerOpen){
        
       backdrop = <BackDrop click={this.backdropClickHandler}/>;
      }
      return (
        <div style={{height:'100%'}}>
       <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
       <SideDrawer show={this.state.sideDrawerOpen}/>;
      {backdrop}
      
       <main style={{marginTop:'64px'}}>
         <p>Content</p>
       </main>
      </div>
      );
    }
  }
  export default App;