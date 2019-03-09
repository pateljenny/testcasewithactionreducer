import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { logoutAction } from './Action/action'
import {Navbar,NavbarToggler,NavbarBrand,Nav,UncontrolledDropdown,
    DropdownToggle,DropdownMenu,DropdownItem,NavLink} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    componentWillMount() {
        let token = localStorage.getItem('token');
        console.log('token', token)
        if ((this.props.token === '' || !this.props.token) && (token === '' || !token)) {
            this.props.history.replace('/login');
        }
    }
    componentDidUpdate() {
        let token = localStorage.getItem('token');
        console.log('token props::', token)
        if ((this.props.token === '' || !this.props.token) && (token === '' || !token)) {
            this.props.history.replace('/login');
        }
    }
    logoutClicked = () => {
        this.props.logoutAction();
    }
    render() {
        return (
            <div>
               
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          <div style={{ color: "#000099", backgroundSize: "cover" ,textAlign:"center", fontSize:"19px"}}>Welcome, you have logged in successfully</div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          
            <Nav className="ml-auto" navbar>
              
              <UncontrolledDropdown nav inNavbar >
                <DropdownToggle nav caret >
                <i className="material-icons"style={{color:"#000099"}} >account_circle</i>
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                <i class="material-icons" style={{marginLeft:"50px",color:"#000066"}}>shopping_cart</i>
                  
                  </DropdownItem>
                  
                  <DropdownItem >
                  {/* <NavLink class="material-icons" style={{marginLeft:"45px",fontSize:"15px"}}href="https://gaana.com/">Play Music</NavLink> */}
                    <i className="material-icons" style={{marginLeft:"50px",color:"#000066"}}>library_music</i>
                  </DropdownItem>
                  <DropdownItem>
                  </DropdownItem>
                  <DropdownItem>
                  {/* <NavLink class="material-icons" style={{marginLeft:"50px",fontSize:"15px"}}href="https://pl12133.github.io/react-solitaire/">Game</NavLink> */}
                  <i className="material-icons" style={{marginLeft:"50px",color:"#000066"}}>gamepad</i>
                  </DropdownItem>
                  <DropdownItem>
                  <i className="material-icons" style={{marginLeft:"50px",color:"#000066"}}>settings</i>
                  </DropdownItem>
                  <DropdownItem>
                  <i className="material-icons" onClick={this.logoutClicked} style={{color:"#000066" ,marginLeft:"50px"}}>power_settings_new</i>
                  {/* <Button  onClick={this.logoutClicked} style={{ backgroundColor: "#4d004d", margin: "10px", color: "white",marginLeft:"25px"}}>Logout</Button> */}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          
        </Navbar>
        <Nav>
        <NavLink class="material-icons" style={{marginLeft:"45px",fontSize:"15px",color:"black",backgroundColor:"white",borderRadius:"20px"}}href="card"><i class="material-icons" style={{marginLeft:"2px",color:"#000066"}}>shopping_cart</i></NavLink>  
          </Nav>
            </div>
        )
    }

}
const mapState = (state) => {
    return {
        token: state.token
    }
}
const mapDispatch = (dispatch) => {
    return {
        logoutAction: bindActionCreators(logoutAction, dispatch)
    }
}
export default withRouter(connect(mapState, mapDispatch)(Home))

