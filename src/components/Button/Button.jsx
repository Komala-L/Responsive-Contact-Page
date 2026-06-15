const Button = ({icon, text, className, ...rest}) => {
  return (
    <button className={`btn_style px-15 py-3 ${className} rounded flex gap-3 items-center justify-center`} {...rest}>
        {icon} {text}
    </button>
  )
}

export default Button