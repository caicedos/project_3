import React from  'react';


const Header = (props) =>{

    const {branding} = props;

    return(
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3">
        <div className="container">
            <a href="/" className="navbar-brand">
                {branding}
            </a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/signin" className="nav-link">
                            SignIn
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/cart" className="nav-link">
                        <i class="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
           
    </nav>
    )
}

export default Header;