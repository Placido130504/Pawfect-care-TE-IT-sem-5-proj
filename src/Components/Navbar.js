import React, { useContext } from 'react'
import logo from '../images/ecommerce.svg'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'

export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div className='navbox'>
            <div className='leftside'>
                <img src={logo} alt="" />
            </div>
            {!user && <div className='rightside'>
                <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
            </div>}
            {user && <div className='rightside'>
                <span><Link to="/" className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
                <span className='no-of-products'>{totalQty}</span>
                <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
    )
}


// import React, { useState, useContext } from 'react';
// import logo from '../images/ecommerce.svg';
// import { Link } from 'react-router-dom';
// import { auth } from '../Config/Config';
// import { Icon } from 'react-icons-kit';
// import { cart } from 'react-icons-kit/entypo/cart';
// import { useHistory } from 'react-router-dom';
// import { CartContext } from '../Global/CartContext';

// export const Navbar = ({ user, products, setFilteredProducts }) => {

//     const history = useHistory();
//     const { totalQty } = useContext(CartContext);
//     const [searchTerm, setSearchTerm] = useState('');

//     // handle logout
//     const handleLogout = () => {
//         auth.signOut().then(() => {
//             history.push('/login');
//         });
//     };

//     const handleFilter = () => {
//         if (searchTerm === '') {
//             setFilteredProducts(products); // Show all if search term is empty
//         } else {
//             const filtered = products.filter(product =>
//                 product.ProductName.toLowerCase().includes(searchTerm.toLowerCase())
//             );
//             setFilteredProducts(filtered);
//         }
//     };

//     return (
//         <div className='navbox'>
//             <div className='leftside'>
//                 <img src={logo} alt="Logo" className="logo" />
//                 <div className='filter-container'>
//                     <input
//                         type="text"
//                         className='filter-input'
//                         placeholder="Search products..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                     <button className='search-btn' onClick={handleFilter}>
//                         🔍
//                     </button>
//                 </div>
//             </div>
//             {!user && (
//                 <div className='rightside'>
//                     <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
//                     <span><Link to="login" className='navlink'>LOGIN</Link></span>
//                 </div>
//             )}
//             {user && (
//                 <div className='rightside'>
//                     <span><Link to="/" className='navlink'>{user}</Link></span>
//                     <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
//                     <span className='no-of-products'>{totalQty}</span>
//                     <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
//                 </div>
//             )}
//         </div>
//     );
// };
