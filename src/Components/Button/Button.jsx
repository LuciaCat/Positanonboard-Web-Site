import "./Button.css";

function Button({ text = "" }) {
    
    const handleClick = () => {
      // window.location.href = "https://wa.me/393382016803";
      window.open("https://wa.me/393382016803", "_blank");
    };
  
    return (
      <input
        className="custom-btn btn"
        type="button"
        value={text}
        onClick={handleClick}
      />
    );
  }
  
  export default Button;
  