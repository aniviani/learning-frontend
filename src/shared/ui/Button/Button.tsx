import styles from './Button.module.css'

export const Button = () => {
const getPeople = async () => {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    
    console.log({ data })


//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
}

    return <button className={styles.button} onClick={getPeople}>Click</button>
}