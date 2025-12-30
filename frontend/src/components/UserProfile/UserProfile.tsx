import { LuCamera } from "react-icons/lu";
import FinancialInformation from "./FinancialInformation";
import PersonalInformation from "./PersonalInformation";
import { useState } from "react";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState<"personal" | "financial">(
    "personal"
  );
  return (
    <div className="flex flex-col items-start gap-5 lg:flex-row">
      <div className="flex-1 flex flex-col gap-5 px-6 py-8 bg-white rounded-2xl shadow-sm w-full">
        <div className="relative  h-24 w-24">
          <img
            src="/profileImage.jpg"
            alt="Profile"
            className="rounded-4xl h-24 w-24 object-cover"
          />
          <div className="absolute -bottom-1.5 right-0 bg-gray-200 rounded-full p-2">
            <LuCamera className="text-gray-600" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg text-(--text-primary)">
            John Smith
          </h3>

          <h6 className="text-(--text-secondary) capitalize">
            {" "}
            senior product manager
          </h6>
        </div>
        <hr className="bg-(--text-secondary)/10 h-px border-none" />
        <ul className="flex flex-col gap-3 w-full">
          <li
            className={`  w-full rounded-lg px-4 py-2 cursor-pointer hover:bg-(--blue-light)/10 hover:text-(--blue-dark) ${
              activeTab === "personal"
                ? "text-(--blue-dark) bg-(--blue-light)/10 "
                : "text-(--text-primary)"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Information
          </li>

          <li
            className={` w-full rounded-lg px-4 py-2 cursor-pointer hover:bg-(--blue-light)/10 hover:text-(--blue-dark) ${
              activeTab === "financial"
                ? "text-(--blue-dark) bg-(--blue-light)/10 "
                : "text-(--text-primary)"
            }`}
            onClick={() => setActiveTab("financial")}
          >
            Financial Information
          </li>
        </ul>
      </div>

      <div className="flex-4 w-full">
        {activeTab === "personal" && <PersonalInformation />}
        {activeTab === "financial" && <FinancialInformation />}
      </div>
    </div>
  );
}
