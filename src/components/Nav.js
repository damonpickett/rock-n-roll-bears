import * as FaIcons from 'react-icons/fa';

function Nav(props) {
    return (
    <>
      <div id='home'></div>
      <div className="nav">
        <div className='nav-container'>
            <div className='burger'>
            <FaIcons.FaBars onClick={() => props.setMenu(true)}/>
            </div>
            <div className='nav-buttons'>
                <button onClick={() => {props.setModal(true)}} className='nav-button'>Instructions</button>
                <button className='nav-button'>Connect Wallet</button>
            </div>
        </div>
      </div>
    </>
    );
  }
  
  export default Nav;