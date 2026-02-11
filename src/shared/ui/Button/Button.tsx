import styles from './Button.module.css'
import { type FC, type ReactNode, type MouseEvent} from "react"

interface IProps {
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}

export const Button: FC<IProps> = ({onClick, children}) => {
    return <button className={styles.button} onClick={onClick}>{children}</button>
}

