interface ButtonProps {
  text: string;
  color: string;
  icon?: string;
  onClick?: (e: any) => void;
  props?: any;
}

export const Button = ({
  text,
  color,
  icon,
  onClick,
  ...props
}: ButtonProps) => {
  const palette =
    color === "dark" ? ["bg-black", "text-white"] : ["bg-white", "text-black"];

  return (
    <button
      className={`flex w-80 items-center justify-center gap-2 ${palette[0]} ${palette[1]} p-5`}
      onClick={onClick}
      {...props}
    >
      <span>{icon && <img src={icon} alt={text} className="h-5 w-5" />}</span>
      <span>{text}</span>
    </button>
  );
};
