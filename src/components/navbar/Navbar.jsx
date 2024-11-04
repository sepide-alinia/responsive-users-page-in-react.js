import styles from "./Navbar.module.css";
import exit from "./../../assets/IMGs/Vector@2x.png";
import add from "../../assets/IMGs/add.png"
import panel from "../../assets/IMGs/panel.png"
import Ellipse from "../../assets/IMGs/Ellipse.png"
import msg from "../../assets/IMGs/msg.png"

export default function Navbar() {
  return (
    <div className={styles.navWrapper}>
      <div className="cntr">
        <div className={styles.topNav}>
          <div>
            <ul>
              <li>
                <a  className={styles.logo} href="#">USER MANAGEMENT</a>
              </li>
              <li>
                <a href="#">ADMIN PANEL</a>{" "}
              </li>
              <li>
                <a href="#">ACCOUNTING</a>
              </li>
            </ul>
          </div>
          <div>
            <li className={styles.iconWrapper}>
              <a href="#">Exit</a>
              <img src={exit} />
            </li>
          </div>
        </div>

        <div className={styles.bottomNav}>
          
           <div>
            <img src={add}/>
            <p className={styles.logo}>Manage Users</p>
          </div>
          <div>
            <img src={panel}/>
            <p>Admin Panel</p>
          </div>
          <div>
            <img src={Ellipse}/>
            <p>Accounting</p>
          </div>
          <div>
            <img src={msg}/>
            <p>Messages</p>
          </div> 
        </div>
      </div>
    </div>
  );
}
