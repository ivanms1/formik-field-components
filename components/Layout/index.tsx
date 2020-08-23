import styles from './Layout.module.css';
import Link from 'next/link';

function Layout({ children }) {
  return (
    <>
      <div className={styles.Sidebar}>
        <Link href='/'>
          <a className={styles.Link}>Home</a>
        </Link>
        <Link href='/no-component-approach'>
          <a className={styles.Link}>No Component Approach</a>
        </Link>
        <Link href='/component-approach'>
          <a className={styles.Link}>Component Approach</a>
        </Link>
        <Link href='/reusable-approach'>
          <a className={styles.Link}>Reusable Approach</a>
        </Link>
        <Link href='/use-field-approach'>
          <a className={styles.Link}>useField Approach</a>
        </Link>
      </div>
      <div className={styles.AppContainer}>
        <div className={styles.Container}>{children}</div>
      </div>
    </>
  );
}

export default Layout;
