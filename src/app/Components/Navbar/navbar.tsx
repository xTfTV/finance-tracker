import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={styles.font}>
            <div className={styles.NavbarContainer}>
                <nav>
                    <Link href="/Dashboard" className={styles.LinkStyle}>Dashboard</Link>
                    <Link href="/Finances" className={styles.LinkStyle}>Finances</Link>
                    <Link href="/Tasks" className={styles.LinkStyle}>Task Manager</Link>
                    <Link href="/About" className={styles.LinkStyle}>About</Link>
                    <Link href="/" className={styles.LinkStyle}>Logout</Link>
                </nav>
            </div>
        </div>
    );
}