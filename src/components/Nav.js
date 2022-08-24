import * as FaIcons from 'react-icons/fa';

function Nav() {
    return (
      <div className="nav">
        <div className='nav-container'>
            <div className='burger'>
            <FaIcons.FaBars />
            </div>
            <div className='nav-buttons'>
                <button className='nav-button'>Instructions</button>
                <button className='nav-button'>Connect Wallet</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Nav;