import Input from "../input/input";
import styles from "./SideBar.module.css";

export default function SideBar() {
return (
<div>
   

        <h3 style={{color:"#4771B9",marginBottom:"5px"}}>Add Users</h3>
        <div className={styles.sideBarWrapper}>

            <h3 className={styles.title}>Add Information</h3>
            <h2>User Information</h2>
            <div className={styles.inputWrapper}>
                <Input placeholder="full name"/>
                <Input placeholder="Production"/>
                <Input placeholder="Whatsapp Number"/>
                <Input placeholder="Website"/>
                <Input placeholder="Company"/>
                <Input placeholder="Telegram ID"/>
            </div>
            <div className={styles.btnWrapper}>
                <h2 className={styles.tags}>Tags</h2>
                <div className={styles.tagBtnWrapper}>
                    <button>Custome Tags</button>
                    <button>Country Tags</button>
                    <button>Production Tags</button>
                </div>
                <div className={styles.addBtnWrapper}>
                    <button >Add User</button>
                </div>
            </div>



        </div>




   

</div>

);
}


























    // <div className={styles.sideBarWrapper}>
    //   <div className="cntr">
    //     <h3>Add Users</h3>
    //     <div className={styles.sideBar}>
    //         <div>
    //             <h3>Add Information</h3>
    //             <div>
    //                 <input type="text" />
    //                 <input type="text" />
    //                 <input type="text" />
    //                 <input type="text" />
    //                 <input type="text" />
    //                 <input type="text" />
    //             </div>
    //             <div>
    //                 <button>Custom Tags</button>
    //                 <button>Country Tags</button>
    //                 <button>Production Tags</button>
    //             </div>
    //       <div>
    //         <button>Add User</button>
    //       </div>
    //     </div>
    //     </div>
        
    //   </div>
    // </div>