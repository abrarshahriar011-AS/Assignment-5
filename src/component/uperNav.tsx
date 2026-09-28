import Navphoto from '../assets/logo-text.png';
const UperNav = () => {
    return (
        <div className='mx-auto my-7 max-w-7xl px-4 sm:px-6 lg:px-18 w-full flex justify-between items-start p-10 text-black'>
            <div className='flex flex-col '>
                  <div >
                <img src={Navphoto} alt="Logo" />
            </div>
                <p className=' text-text '>Curated tools, technologies, and resources for developers <br /> building
modern software.</p>
     <ul className='flex gap-5 mt-2'>
        <a href="">GitHub</a>
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
     </ul>
            </div>
            <div className='flex flex-col gap-2'>
                <h2>PRODUCT</h2>
                <a className='text-text' href="">Home</a>
                <a className='text-text' href="">Technologies</a>
                <a className='text-text' href="">Projects</a>
            </div>
            <div className='flex flex-col gap-2'>
                <h2>COMPANY</h2>
                <a className='text-text' href="">About</a>
                <a className='text-text' href="">Contact</a>
                <a className='text-text' href="">Careers</a>
            </div>
            <div className='flex flex-col gap-2'>
                  <h2>LEGAL</h2>
                <a className='text-text' href="">Privacy Policy</a>
                <a className='text-text' href="">Terms of Service</a>
            </div>
        </div>
    );
};

export default UperNav;