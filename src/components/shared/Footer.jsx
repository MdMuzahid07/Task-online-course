import { appStore, playStore } from "../../assets";

const Footer = () => {
  return (
    <footer className="bg-texture mt-20 w-full">
      <div className="max-w-7xl mx-auto py-16 px-4 xl:px-0 flex justify-between flex-wrap gap-16">
        <ul>
          <li className="text-xl mb-8">About US</li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Our Mission
          </li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Our Vision
          </li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Team
          </li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Careers
          </li>
        </ul>
        <ul>
          <li className="text-xl mb-8">Courses</li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Trending
          </li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            New Releases
          </li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Best Sellers
          </li>
        </ul>
        <ul>
          <li className="text-xl mb-8">Support</li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            FAQ
          </li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Contact US
          </li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Return Policy
          </li>
          <li className="font-bold text-slate-700 mb-5 cursor-pointer hover:underline">
            Payment methods
          </li>
        </ul>
        <ul>
          <li className="text-xl mb-8">Download App</li>
          <li className="mb-5 flex items-center gap-2 border px-5 py-3 rounded-xl bg-white cursor-pointer hover:border-red-500">
            <img className="w-7 h-7" src={playStore} alt="" />{" "}
            <span>From Play Store</span>
          </li>
          <li className="mb-5 flex items-center gap-2 border px-5 py-3 rounded-xl bg-white cursor-pointer hover:border-red-500">
            <img className="w-7 h-7" src={appStore} alt="" />
            <span>From App Store</span>
          </li>
        </ul>
      </div>
      <div className="bg-black py-2">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row   md:justify-between md:items-center gap-3 text-md text-red-500">
          <p className="order-last md:order-first">
            Copyright | All Right Reserved 2024 by CourseBuy
          </p>
          <ul className="flex items-center gap-5 order-first md:order-last">
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;