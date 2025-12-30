import { RxDashboard } from "react-icons/rx";
import { LuClock3 } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { useState } from "react";

export default function ProfileSidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const activeStyle = "bg-(--blue-dark) text-white";
  const normalStyle =
    "text-(--text-secondary) hover:bg-[rgb(49,106,183)]/10 hover:text-[rgb(49,106,183)]";
  return (
    <aside className="w-14 lg:w-20 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center gap-6">
      <div className="relative h-12 w-12 my-5">
        <img
          src="/logo.png"
          alt="Profile"
          className=" h-12 w-12 object-cover"
        />
      </div>
      <button
        onClick={() => setActiveTab("dashboard")}
        className={`p-3 cursor-pointer rounded-lg transition-all ${
          activeTab === "dashboard" ? activeStyle : normalStyle
        }`}
      >
        <RxDashboard size={22} />
      </button>

      <button
        onClick={() => setActiveTab("time")}
        className={`p-3 cursor-pointer rounded-lg transition-all ${
          activeTab === "time" ? activeStyle : normalStyle
        }`}
      >
        <LuClock3 size={22} />
      </button>

      <button
        onClick={() => setActiveTab("documents")}
        className={`p-3 cursor-pointer rounded-lg transition-all ${
          activeTab === "documents" ? activeStyle : normalStyle
        }`}
      >
        <FaRegFileLines size={22} />
      </button>

      <button
        onClick={() => setActiveTab("employees")}
        className={`p-3 cursor-pointer rounded-lg transition-all ${
          activeTab === "employees" ? activeStyle : normalStyle
        }`}
      >
        <GoPeople size={22} />
      </button>

      <button
        onClick={() => setActiveTab("products")}
        className={`p-3 cursor-pointer rounded-lg transition-all ${
          activeTab === "products" ? activeStyle : normalStyle
        }`}
      >
        <BsBoxSeam size={22} />
      </button>
    </aside>
  );
}
