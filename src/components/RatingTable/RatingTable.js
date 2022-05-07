import ListUsers from '../ListUsers'
import s from '../../style/RatingTable.module.scss'

function RatingTable() {
    return (
        <div className={s.container}>
            <h1 className={s.title}>Rating table</h1>
            <ListUsers/>
        </div>
    )
}

export default RatingTable;