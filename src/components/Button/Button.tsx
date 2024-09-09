interface IButton {
  onClick: () => void;
  text: string;
}

export const Button = ({
  onClick,
  text
}: IButton) => {
  return (
    <button className="bg-yellow px-4 py-1 rounded-3xl text-white hover:scale-105 transition-all ease-in-out duration-300" onClick={onClick}>{text}</button>
  )
}
