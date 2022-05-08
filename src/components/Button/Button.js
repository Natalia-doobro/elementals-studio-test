import s from "../../style/Button.module.scss";

function Button({ onClick }) {
  return (
    <button className={s.Button} onClick={onClick}>
      Land More
    </button>
  );
}
export default Button;
