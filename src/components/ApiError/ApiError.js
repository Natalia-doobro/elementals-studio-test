import s from "../../style/ApiError.module.scss";

function ApiError({ onError }) {
  return (
    <div className={s.container}>
      <img
        src="https://www.tangopixel.com/assets/images/3dcart/3dcart-error-page.jpg"
        alt="error"
        className={s.img}
      ></img>
      <h2 className={s.title}>{onError}</h2>
    </div>
  );
}

export default ApiError;
