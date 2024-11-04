
import Main from '../main/Main'
import SideBar from '../sideBar/SideBar'
import styles from './Body.module.css'

export default function Body(){

    return(

        <div className='cntr'>
        <div className={styles.bodyWrapper}>

      

         <SideBar/>
            <Main/> 
            
           </div> 
          </div>
          
    )
}