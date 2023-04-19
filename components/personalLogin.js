import React from 'react';

function LoginButtons({click,click2}) {
  return (
    <div className={styles.loginPage}>
      <button className={styles.button} onClick={click}>User</button>
      <button className={styles.button} onClick={click2}>Artist</button>
    </div>
  );
}

const styles = {
    main: `w-screen h-screen bg-white text-black flex flex-col justify-center items-center`,
    button: `bg-[#22C55E] m-3 text-white font-bold py-4 px-7 rounded-full hover:opacity-70 transition`,
    text: `text-4xl text-black mb-10`,
    buttons: `flex items-center`,
    loginPage: `w-screen h-screen bg-white flex justify-center flex-col items-center`,
    
  }
export default LoginButtons;