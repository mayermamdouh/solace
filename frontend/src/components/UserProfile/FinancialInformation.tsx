import Button from "../ui/Button";

export default function FinancialInformation() {
  return (
    <div className="rounded-lg bg-white shadow px-6 py-8 w-full">
      <div className="flex items-center justify-between ">
        <h3 className="font-bold text-sm lg:text-lg text-(--text-primary)">
          Bank Information
        </h3>
        <Button text="Edit"></Button>
      </div>
      <div className="mt-6 ">
        <ul className="flex gap-10 flex-wrap">
          <li className="flex flex-col">
            <span className=" text-(--text-secondary) text-sm">Bank Name</span>
            <span className="text-(--text-primary)">CIB </span>
          </li>
          <li className="flex flex-col">
            <span className=" text-(--text-secondary) text-sm">IBAN</span>
            <span className="text-(--text-primary)">12346546413216446</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
