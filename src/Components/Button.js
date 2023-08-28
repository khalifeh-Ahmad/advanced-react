const Button = ({ color, customClasses, callBackFn, children }) => {
  return (
    <div
      className={`${customClasses ? "button" + customClasses : "button"}`}
      style={{ color: color }}
      onClick={callBackFn}
    >
      {children}
    </div>
  );
};

export default Button;
