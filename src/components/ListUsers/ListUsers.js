import {useState} from 'react'
import UsersCard from '../UsersCard'
import db from '../../db.json'
import s from '../../style/ListUsers.module.scss'

function ListUsers() {
    const [idCard, setIdCard] = useState('');

    const handleActiveChange = (event) => {
        setIdCard(event);
    }

    return (
        
        <ol className={s.list}>
            {db.map(({ id, name, speed, time }) =>
             <li key={id} className={s.item} onClick={() => handleActiveChange(id)}>
                    <UsersCard
                        id={id}
                        name={name}
                        speed={speed}
                        time={time}
                        idCard={idCard}
                     />
              </li>    
            )}
        </ol>
        
    )
}

export default ListUsers;