import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const MainLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className={styles.layout}>
      <header className={styles.layoutHeader}>
        <Link to="/">
          <h3>Учим Грузинский С Романом</h3>
        </Link>
      </header>
      <div className={styles.content}>
        {children}
      </div>
    </main>
  )
}

export default MainLayout