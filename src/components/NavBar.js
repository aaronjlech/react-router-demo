import React, { Component } from 'react';
import {Link} from 'react-router';




export default class NavBar extends Component{
   constructor(){
      super()
      this.state ={
         dropDown: "dropdown",
         dropDownMobile: "collapse navbar-collapse"
      }
   };
   showDropDown(evt){
      let { toggle } = evt.currentTarget.dataset;
      let { dropDown, dropDownMobile } = this.state
      if(toggle === "desktop"){
         if(dropDown === "dropdown"){
            this.setState({dropDown: "dropdown open"});

         }else{
            this.setState({dropDown: "dropdown"});
         }
      }else{
         if(dropDownMobile === "collapse navbar-collapse"){
            this.setState({dropDownMobile: "collapse navbar-collapse in"});

         }else{
            this.setState({dropDownMobile: "collapse navbar-collapse"});
         }
      }
   }
   render(){
      
      return(
         <nav className="navbar navbar-default">
           <div className="container">
             <div className="navbar-header">
               <button type="button"
                  onClick={this.showDropDown.bind(this)}
                  className="navbar-toggle collapsed"
                  data-toggle="mobile" >
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
               </button>
               <Link className="navbar-brand" to="/">My Friend's List</Link>
             </div>
             <div className={this.state.dropDownMobile} id="bs-example-navbar-collapse-1">

               <ul className="nav navbar-nav navbar-right">
                  <ul className="nav navbar-nav">
                    <li className="active"><Link to="/view/single">Hello <span className="sr-only">(current)</span></Link></li>
                    <li><a href="#">Link</a></li>
                    <li className={this.state.dropDown}>
                      <a href="#" className="dropdown-toggle" role="button" data-toggle="desktop" onClick={this.showDropDown.bind(this)}>Dropdown <span className="caret"></span></a>
                      <ul className="dropdown-menu active" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li className="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                      </ul>
                    </li>
                  </ul>               </ul>
             </div>
           </div>
         </nav>
      )

   };
}
