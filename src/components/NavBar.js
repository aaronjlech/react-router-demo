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
               <Link className="navbar-brand" to="/"><span>FakeBook</span></Link>
             </div>
             <div className={this.state.dropDownMobile} id="bs-example-navbar-collapse-1">

               <ul className="nav navbar-nav navbar-right">

                  <ul className="nav navbar-nav nav-pills">

                    <li>
                       <Link to= "/show/friend-requests">
                          <span>Friend Requests</span> <span className="badge">0</span>
                       </Link>
                    </li>
                    <li>
                       <Link to= "/show/messages">
                             <span>Messages <span className="badge">0</span></span>
                       </Link>
                    </li>
                    {/* <li className={this.state.dropDown}>
                      <a href="#" className="dropdown-toggle" role="button" data-toggle="desktop" onClick={this.showDropDown.bind(this)}>Menu <span className="caret"></span></a>
                      <ul className="dropdown-menu active" role="menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li className="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                      </ul>
                    </li> */}
                    <li>
                       <Link className="nav-img">
                          <img src={this.props.currentUser.picture.thumbnail} alt=""/>
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-username">
                          <span>HI! {this.props.currentUser.login.username}</span>
                        </Link>
                    </li>
                  </ul>
                 </ul>
             </div>
           </div>
         </nav>
      )

   };
}
