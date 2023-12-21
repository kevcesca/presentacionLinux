import Image from 'next/image'
import styles from './page.module.css'
import Diapositiva from './_Components/Diapositiva/Diapositiva'

//Importacion de imagenes
import pinguino from '../public/images/tux-327x360.png'
import linuxShell from '../public/images/shell/1689177424548.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <Diapositiva
        title="Comandos con Linux" 
        imageUrl={pinguino}
      />

      <Diapositiva
        title="La shell de Linux" 
        imageUrl={linuxShell}
        text='
        Comandos internos
        \n Comandos externos
        \n Hashing de comandos
        '
      />

    </main>
  )
}
