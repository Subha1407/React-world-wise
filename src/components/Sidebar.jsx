import styles from './Sidebar.module.css';
import Logo from './Logo';
import {AppNav} from './AppNav'
import { Outlet } from 'react-router-dom';
export function Sidebar() {
    return(
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>

            <Outlet/>

            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Cpoyright {new Date().getFullYear()} y WorldWise Inc.
                </p>
            </footer>
        </div>
    )
}