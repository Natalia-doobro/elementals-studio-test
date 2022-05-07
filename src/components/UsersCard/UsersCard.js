import sprite from '../../images/sprite.svg'
import classNames from 'classnames';
import s from '../../style/ListUsers.module.scss'

function UsersCard({ id, name, speed, time, idCard }) {

    return (
        <div className={s.container}>
            <svg className={ id === idCard  ? classNames(s.img, s.imgFocus) : s.img}>
                <use href={`${sprite}#icon-helmet`}></use>
            </svg>  

            <div className={s.dataUser}>
                <h2 className={s.name}>{name}</h2>
                <p className={s.time}>{time} <span className={s.line}></span><span className={s.speed}>{speed} км/ч</span></p>
                <p className={s.text}>штрафное время 00:00.00</p>
            </div>
        </div>
    )
}

export default UsersCard;