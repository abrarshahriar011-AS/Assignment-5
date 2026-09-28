import imageheader from '../assets/banner-stack.png';
const headerBar = () => {
    return (
      <header className='container mx-auto px-4 sm:px-6 lg:px-18 min-h-100 w-full   md:flex justify-between items-center p-5 text-black  '>  
        <div>
            <h2 className='text-6xl  font-extrabold'>
                Build Your Ideal <br />
                <span className='bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
            </h2>
            <p className='text-text text-lg my-5'>
                Explore frontend, backend, database, and tooling options,<br />
                compare them side by side, and put together the stack that fits your <br />
                next project.
            </p>
            <div className='flex gap-5'>
                <button className='bg-button text-white px-5 py-2 rounded-md'>Explore Technologies</button>
                <button className='border border-black text-black px-5 py-2 rounded-md'>Learn More</button>
            </div>
        </div>  
        <div >
                       < img  src={imageheader} alt="" />
        </div>
      </header>
    );
};

export default headerBar;