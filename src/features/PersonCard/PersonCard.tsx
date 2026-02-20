import styles from './PersonCard.module.css'

interface IProps {
    firstname: string;
    name: string;
    lastname: string;
    birthday: string;
    onDelete: (params: {firstname: string; name: string; lastname: string; birthday: string}) => void;
    onChange: (params: {firstname: string; name: string; lastname: string; birthday: string}) => void;
}

export const PersonCard = ({firstname, name, lastname, birthday, onDelete, onChange}: IProps) => {

    const handleDeleteClick = () => {
        onDelete({firstname, name, lastname, birthday})
    }

    const handleChangeClick = () => {
        onChange({firstname, name, lastname, birthday})
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.avatar}></div>
                <div className={styles.info}>
                   <span>Фамилия: {firstname}</span> 
                   <span>Имя: {name}</span> 
                   <span>Отчество: {lastname}</span> 
                  <span>Дата рождения: {birthday}</span>  
                </div>
            </div>

            <div className={styles.content}>
                Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Placeat, dicta consequatur 
                nesciunt, libero ea molestias unde, quaerat 
                enim voluptatum mollitia odio alias ut impedit 
                distinctio quos animi adipisci velit cumque?
            </div>

            <button onClick={ handleDeleteClick }>удалить</button>
            <button onClick={ handleChangeClick }>редактировать</button>
        </div>
    )
}