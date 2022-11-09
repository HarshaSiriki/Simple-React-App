import React, { Component } from 'react';
class NavBar extends Component {
    
    render() { 
        const {totalCounters} = this.props;
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">NavBar
                <span className='badge badge-pill badge-secondary bg-dark m-3'>
                    {totalCounters}
                </span>
                </a>

            </nav>
        );
    }
}
 
export default NavBar;