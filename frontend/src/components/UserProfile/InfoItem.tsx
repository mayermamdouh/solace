import type { InfoItemProps } from "../../types";

export function InfoItem({ label, value }: InfoItemProps) {
  return (
    <li className="flex flex-col gap-1">
      <span className="text-(--text-secondary) text-xs lg:text-sm">
        {label}
      </span>
      <span className="text-(--text-primary) text-xs lg:text-sm">{value}</span>
    </li>
  );
}
