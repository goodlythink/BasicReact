import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                {this.renderLink()}
            </div>
        )
    }

    renderLink() {
        if (localStorage.getItem('react-token')) {
            return (
                <div>
                    <Navbar color="faded" light expand="md">
                        <NavbarBrand href="/" className="mr-auto">My React</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="/" className="nav-link">หน้าหลัก</Link></li>
                                <li className="nav-item"><Link to="/user" className="nav-link">ผู้ใช้งาน</Link></li>
                                <li className="nav-item"><a href='#'  className="nav-link" onClick={this.signOut}>ออกจากระบบ</a></li>
                            </ul>
                        </Collapse>
                    </Navbar>
                </div>
            )
        }
    }

    signOut = (e) => {
        localStorage.removeItem('react-token')
        this.props.history.push('/signin')
    }
}

export default withRouter(Header)