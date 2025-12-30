import type { InfoSectionProps } from "../../types";
import Button from "../ui/Button";
import { InfoItem } from "./InfoItem";

export default function PersonalInformation() {
  return (
    <div className="flex flex-col gap-5  w-full">
      <InfoSection title="Basic Information ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          <ul className="flex flex-col gap-7">
            <InfoItem label="National ID Number" value="29702031400693" />
            <InfoItem label="First Name" value="John" />
            <InfoItem label="الأسم الأول" value="جون" />
            <InfoItem label="Date of birth" value="01 / 04 / 1980" />
            <InfoItem label="Passport No." value="A135464" />
            <InfoItem label="Marital Status" value="Single" />
          </ul>

          <ul className="flex flex-col gap-7">
            <InfoItem
              label="National ID Expiring Date"
              value="01 / 04 / 2025"
            />
            <InfoItem label="Father Name" value="John" />
            <InfoItem label="اسم الأب" value="جون" />
            <InfoItem label="Gender" value="Male" />
            <InfoItem label="Passport Issue Date" value="01 / 04 / 1980" />
            <InfoItem label="Dependencies" value="0" />
          </ul>

          <ul className="flex flex-col gap-7">
            <InfoItem label="Title" value="Mr." />
            <InfoItem label="Grand Father Name" value="John" />
            <InfoItem label="اسم الجد" value="جون" />
            <InfoItem label="Nationality" value="Egyptian" />
            <InfoItem label="Passport Expiry Date" value="01 / 04 / 1980" />
          </ul>

          <ul className="flex flex-col gap-7">
            <InfoItem label="Family Name" value="Smith" />
            <InfoItem label="اللقب / اسم العائلة" value="سميث" />
            <InfoItem label="Additional Nationality" value="-" />
          </ul>
        </div>
      </InfoSection>

      <InfoSection title="Contact Information">
        <ul className="flex gap-10 flex-wrap">
          <InfoItem label="Personal Email" value="john.smith@gmail.com" />
          <InfoItem label="Mobile" value="011223344556" />
        </ul>
      </InfoSection>

      <InfoSection title="Emergency Contacts">
        <ul className="flex gap-10 flex-wrap">
          <InfoItem label="Emergency Contact Person Name" value="John John" />
          <InfoItem label="Emergency Relation" value="Father" />
          <InfoItem label="Emergency Phone" value="011224477885" />
        </ul>
      </InfoSection>

      <InfoSection title="Address Details">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
          <ul className="flex flex-col gap-7">
            <InfoItem label="Country" value="Egypt" />
            <InfoItem label="Building" value="7" />
          </ul>
          <ul className="flex flex-col gap-7">
            <InfoItem label="City" value="Cairo" />
            <InfoItem label="Street" value="Street 127" />
          </ul>
          <ul className="flex flex-col gap-7">
            <InfoItem label="Postal Code" value="11728" />
            <InfoItem label="Floor No." value="7" />
          </ul>
          <ul className="flex flex-col gap-7">
            <InfoItem label="Apartment" value="72" />
          </ul>
        </div>
      </InfoSection>

      <InfoSection title="Driving License Details">
        <ul className="flex gap-10 flex-wrap">
          <InfoItem label="Driving License" value="Yes" />
          <InfoItem label="Driving License Type" value="C1E" />
          <InfoItem
            label="Driving License expiry date"
            value="01 / 04 / 2025"
          />
        </ul>
      </InfoSection>

      <InfoSection title="Military Status">
        <ul className="flex gap-10 flex-wrap">
          <InfoItem label="Require Travel Permit" value="Yes" />
          <InfoItem label="Military Status" value="Exempted" />
          <InfoItem label="Document" value="file" />
        </ul>
      </InfoSection>
    </div>
  );
}

function InfoSection({ title, children }: InfoSectionProps) {
  return (
    <div className="rounded-2xl bg-white shadow px-6 py-8 w-full">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-sm lg:text-lg  text-(--text-primary)">
          {title}
        </h3>
        <Button text="Edit" />
      </div>

      <div className="mt-6">{children}</div>
    </div>
  );
}
