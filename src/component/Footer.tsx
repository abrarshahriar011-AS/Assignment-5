const Footer = () => {
    return (
 <footer className="border-t border-gray-200 bg-white text-xs text-slate-400">
  <div className="text-base mx-auto flex min-h-[70px] max-w-5xl items-center justify-between px-6">
    <p>© 2026 Dev Stack. All rights reserved.</p>

    <nav  className="flex gap-5">
      <a href="" className= "text-base hover:text-slate-600">
        Privacy
      </a>
      <a href="" className="text-base hover:text-slate-600">
        Terms
      </a>
    </nav>
  </div>
</footer>
    );
};

export default Footer;