import { HashLink } from 'react-router-hash-link';
import { AiOutlineClose } from "react-icons/ai";

const BurgerMenu = (props) => {

    let visibility = 'hide'

    if(props.menu) {
        visibility = 'show'
    }  

  return (
    <div id='burger-menu' className={visibility}>
        <div className='close-button'>
            <AiOutlineClose onClick={() => props.setMenu(false)}/>
        </div>
        <ul className='burger-list'>
            <li><HashLink smooth to='/#home'>Home</HashLink></li>
            <li><HashLink smooth to='/#purchase'>Purchase</HashLink></li>
            <li><HashLink smooth to='/#about'>About</HashLink></li>
            <li><HashLink smooth to='/#roadmap'>Roadmap</HashLink></li>
            <li><HashLink smooth to='/#social'>Social</HashLink></li>
        </ul>
    </div>
  );
}

export default BurgerMenu;