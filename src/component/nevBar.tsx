import Navphoto from '../assets/logo-text.png';
import {RxHamburgerMenu}  from "react-icons/rx";
const navBar = () => {
    return (
        <nav className='container mx-auto px-4 sm:px-6 lg:px-18 w-full flex justify-between items-center p-5 text-black bg-white shadow-md'>
            <div >
                <img src={Navphoto} alt="Logo" />
            </div>
            <div className='hidden md:flex gap-5 text-text font-semibold'>
                <a href="" className='text-button'>Home</a>
                <a href="">Technologies</a>
                <a href="">Projects</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
            <div className='hidden md:flex gap-5'>
                <button className='border border-black text-black px-5 py-1 rounded-md'>Sign In</button>
                <button className='bg-button text-white px-5 py-1 rounded-md'>Sign Up</button>
            </div>
            <span className='block md:hidden'><RxHamburgerMenu /></span>
        </nav>
    );
};

export default navBar;