import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

export function BackButton() {
    const navigate = useNavigate();
    function goback () {
        navigate(-1);
    };
    return (
        <button className={styles.backbutton} onClick={goback}>Back</button>
    );
};    