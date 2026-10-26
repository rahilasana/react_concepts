import React from 'react';
// import '../components/button/button.modules.css'
import styles from './button.module.css'
const Button = () => {
  return (
    <div className={styles.btn} >
      <button className={styles.btn1} >hello</button>
      <button className={styles.btn2}>Saniaz-khan</button>
    </div>
  );
}

export default Button;