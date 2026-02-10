import type {FC, ReactNode} from "react";
import "./Modal.css";

interface IModal {
    close: () => void;
    children: ReactNode;
}
export const Modal: FC<IModal> = ({close, children}) => {
    return (
        <div className="modal-overlay" onClick={close}>
        <div className="modal-window" onClick={(event) => {
            event.stopPropagation()
        }}>
            <button className="modal-close" onClick={close}>×</button>
            {children}
        </div>
    </div>)
}