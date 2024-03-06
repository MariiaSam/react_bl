import "./button.css";

const Button = ({type='submit', text}) => {
  return (
    <button type={type} className="btn">
      {text}
    </button>
  );
};

export default Button;