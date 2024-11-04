
import pic from "../../assets/IMGs/Ellipse 19.png";
import styles from "./card.module.css"

export default function Card(){


    return(
        <div className={styles.card}>
            <span>Edit User</span>
            <div className={styles.basicInfo}>
                <div>
                <img src={pic}></img>
                </div>
                <div>
                    <h3>Morteza Akhavan</h3>
                    <h4>shopper</h4>
                    <h4>VIP</h4>
                </div>
              
            </div >
            <div className={styles.fullInfo}>
                <div>
                    <h5>
                    Full Name
                    </h5>
                    <h5>
                    Morteza Akhavan
                    </h5>
                </div>
                <div>
                    <h5>
                    Whatsapp Number
                    </h5>
                    <h5>
                    09350989878
                    </h5>
                </div>
                <div>
                    <h5>
                    Telegram ID
                    </h5>
                    <h5>
                    @mort1234
                    </h5>
                </div>
                <div>
                    <h5>
                    Email
                    </h5>
                    <h5>
                    morteza.ak@gmail.com
                    </h5>
                </div>
                <div>
                    <h5>
                    Website
                    </h5>
                    <h5>
                    www.morteza.ir
                    </h5>
                </div>
                <div>
                    <h5>
                    Company
                    </h5>
                    <h5>
                    Mehran Ava Gostar
                    </h5>
                </div>
            </div>
        </div>
    )
}