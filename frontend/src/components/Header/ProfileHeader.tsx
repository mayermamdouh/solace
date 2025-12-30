import { MdKeyboardArrowRight } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuSettings } from "react-icons/lu";

export default function ProfileHeader() {
  return (
    <header className="flex items-center flex-col lg:flex-row  px-6 py-4 justify-between">
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg lg:text-2xl text-(--text-primary)">
          John Smith Profile
        </h3>
        <div className="flex items-center flex-wrap gap-1 text-[10px] lg:text-xs text-(--text-secondary)">
          <span>Dashboard</span>
          <MdKeyboardArrowRight size={20} className="text-(--blue-light)" />
          <span>HR Manager</span>
          <MdKeyboardArrowRight size={20} className="text-(--blue-light)" />
          <span>Employees</span>
          <MdKeyboardArrowRight size={20} className="text-(--blue-light)" />
          <span className="font-semibold text-(--blue-dark) capitalize">
            john smith profile
          </span>
        </div>
      </div>
      <div className="flex items-center gap-7">
        <div className="relative ">
          <FiBell size={24} className="text-[rgb(29,73,63)] cursor-pointer" />
          <div className="absolute rounded-full bg-red-600 h-3 w-3 -top-0.5 -right-0.5"></div>
        </div>
        <MdOutlineEmail
          size={24}
          className="text-[rgb(29,73,63)] cursor-pointer"
        />
        <LuSettings size={24} className="text-[rgb(29,73,63)] cursor-pointer" />
        <div className="relative rounded-lg h-8 w-8 cursor-pointer">
          <img
            src="/profileImage.jpg"
            alt="Profile"
            className="rounded-lg h-8 w-8 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
