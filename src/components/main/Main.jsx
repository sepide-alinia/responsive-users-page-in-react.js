import Card from "../card/Card"
import styles from "./main.module.css"

export default function Main(){

    return(

        <div className={styles.mainWrapper}>
            <h3 className={styles.header}>Edit Users</h3>
            <div className={styles.cardWrapper}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>           
        </div>
    )
}