interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  text,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-[rgb(49,106,183)] text-white px-5 lg:px-10 py-1.5 rounded-sm cursor-pointer hover:bg-[rgb(49,106,183)]/90 transition-all"
    >
      {text}
    </button>
  );
}
