
// hamesha yad rakhna "module" likhna hota hia "modules" nahi
import styles from './header.module.css'
const Header = () => {
  return (
    <div>
      <div className={styles.head1}>This is saniaz brand</div>
      <div className={styles.head2}>This is saniaz brand</div>
    </div>
  );
}

export default Header;