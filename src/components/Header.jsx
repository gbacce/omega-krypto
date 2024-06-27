import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavHashLink } from 'react-router-hash-link';

// const Dropdown = ({ trigger, menu }) => {
//     const [open, setOpen] = React.useState(false);
  
//     const handleOpen = () => {
//       setOpen(!open);
//     };
  
//     return (
//       <div className="dropdown">
//         {React.cloneElement(trigger, {
//           onClick: handleOpen,
//         })}
//         {open ? (
//           <ul className="menu">
//             {menu.map((menuItem, index) => (
//               <li key={index} className="menu-item">
//                 {React.cloneElement(menuItem, {
//                   onClick: () => {
//                     menuItem.props.onClick();
//                     setOpen(false);
//                   },
//                 })}
//               </li>
//             ))}
//           </ul>
//         ) : null}
//       </div>
//     );
//   };

export default function Header() {
    return <div className='headerWrapper'>
        <div className='header'>
            <NavLink to='/' className='headerLink'>
                <img src='/logo.png' alt='logo' className='imgLogo' />
            </NavLink>
            <NavLink to='/' className='headerLink'>Home</NavLink>
            <NavLink to='/solutions' className='headerLink'>Solutions</NavLink>
            {/* <NavHashLink to='/solutions' className='headerLink'>Solutions</NavHashLink> */}
            {/* <Dropdown
                trigger={<button className='headerLink'>Solutions</button>}
                menu={[
                    <button onClick={handleMenuOne}>Immune</button>,
                    <button onClick={handleMenuTwo}>POLY-SUBSTITUTION ENCRYPTION</button>,
                ]}
                /> */}
            <NavLink to='/privacy' className='headerLink'>Data Privacy</NavLink>
            <NavLink to='/ransomware' className='headerLink'>Ransomware</NavLink>
            <NavLink to='/krypto-insights' className='headerLink'>Krypto-Insights</NavLink>
            <NavLink to='/contact' className='headerLink'>About</NavLink>
            <NavLink to='/demo' className='headerLink'>Try It Out</NavLink>
        </div>
    </div>
}