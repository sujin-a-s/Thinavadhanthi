
interface ButtonProps {
    onClick : ()=>void,
    children : React.ReactNode
}
const Button = ({onClick,children}:ButtonProps) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClick}>{children}</button>
  )
}

export default Button