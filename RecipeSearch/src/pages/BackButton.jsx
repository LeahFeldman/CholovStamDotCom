import { Navigate } from 'react-router-dom';
import styles from './BackButton.module.css';

export function BackButton() {
    function goback() {
        Navigate(-1);
    }
    return (
        <button className={styles.backbutton} onClick = "goback()" >Back</button>
    )
}    