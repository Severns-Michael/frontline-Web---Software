import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import styles from './Layout.module.css'


export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
return (
<div className={styles.shell}>
<Header />
<main id="main" className="container">{children}</main>
<Footer />
</div>
)
}