import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

// icons
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdContactEmergency } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="h-24 flex justify-between items-center px-5 bg-gradient-to-r from-slate-600 to-slate-900 border-b-4 border-slate-950">
      <Avatar className="h-16 w-16 rounded-lg shadow-lg">
        <Link to={"/"}>
          <AvatarImage src={"/logo.svg"} />
        </Link>
      </Avatar>
      <div className="text-4xl hidden md:flex font-playwrite-it-regular font-extra-bold text-slate-200">
        Referral Nexus
      </div>
      <div className="flex gap-4 text-4xl text-slate-200">
        {/* TODO Add links */}
        <FaLinkedin />
        <FaSquareGithub />
        <div>
          <MdContactEmergency />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
