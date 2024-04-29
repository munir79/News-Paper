import logo from '../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div>
         <img className=' mx-auto' src={logo} alt="" />
         <h3 className='text-center'>Journalism Without Fear or Favour</h3>
         <h3 className=' text-center'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
         <div className='flex'>
         <button className="btn btn-secondary">Secondary</button>
         <Marquee className='text-2xl'>
  I can be a React component, multiple React components, or just some text.
</Marquee>
         </div>
        </div>
    );
};

export default Header;