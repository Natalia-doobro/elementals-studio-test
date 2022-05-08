import {useEffect, useState } from "react";
import {userSearch} from '../../API/api'
import UsersCard from '../UsersCard'
import Button from '../Button'
import ApiError from '../ApiError'
import s from '../../style/ListUsers.module.scss'

function ListUsers() {
    const [idCard, setIdCard] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        userSearch()
        .then((user) => {
            setUsers(user);
        })
        .catch((error) => {
            setError(error);
        });
    }, []);

    useEffect(() => {
        userSearch()
        .then((user) => {
            const userNaw = user;
            
            setUsers((prevState) => {
            const userElem = [...prevState, ...userNaw];
            return userElem;
            });
        })
        .catch((error) => {
            setError(error);
        });
    }, [page]);

    const scrollLandMore = () => {
        setPage((prevState) => prevState + 1);
    };

    const handleActiveChange = (event) => {
        setIdCard(event);
    }

    return ( 
        <>  {users.length > 0
            ? (
            <ol className={s.list}>
                {users.map(({ id, color, name, speed, time }) =>
                    <li key={id} className={s.item} onClick={() => handleActiveChange(id)}>
                        <UsersCard
                            id={id}
                            color={color}
                            name={name}
                            speed={speed}
                            time={time}
                            idCard={idCard}
                        />
                    </li>
                )}
            </ol>)
            :(<ApiError onError="movie not found"></ApiError>)}
                 
            {users.length > 0 &&
                <Button onClick={()=> scrollLandMore()}></Button>
            }

            {error && <ApiError onError="movie not found"></ApiError>}
      </>     
    )
}

export default ListUsers;