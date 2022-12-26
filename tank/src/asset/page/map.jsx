import styles from '../style/map.module.css'
import {Tank} from '../component/index'
export const Map=()=>{
    document.onkeydown = (e) => {
        e = e || window.event;
        if (e.keyCode === 38) {
          console.log('up arrow pressed')
        } else if (e.keyCode === 40) {
          console.log('down arrow pressed')
        } else if (e.keyCode === 37) {
          console.log('left arrow pressed')
        } else if (e.keyCode === 39) {
          console.log('right arrow pressed')
        }
      }
    return (
        <div className={styles.container}>
            <div className={styles.map}>
                <Tank></Tank>
            </div>
        </div>
    )
}