"use client"
import styles from './page.module.css'
import Diapositiva from './_Components/Diapositiva/Diapositiva'
import React, { useEffect, useRef, useState } from 'react';

//Importacion de imagenes
import pinguino from '../public/images/tux-327x360.png'
import linuxShell from '../public/images/shell/1689177424548.png'
import Consola from './_Components/Consola/Consola'




export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionsRef = useRef([]);
  const isScrolling = useRef(false);

  useEffect(() => {
    sectionsRef.current = sectionsRef.current.slice(0, 3); // Asumiendo que tienes 3 secciones
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling.current) return;
      isScrolling.current = true;

      // Esperar un breve periodo antes de aceptar otro scroll
      setTimeout(() => {
        isScrolling.current = false;
      }, 1000); // Ajusta este tiempo según necesites

      // Determinar dirección del desplazamiento
      const direction = event.deltaY > 0 ? 'down' : 'up';

      if (direction === 'down' && currentSection < sectionsRef.current.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (direction === 'up' && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }

      sectionsRef.current[currentSection]?.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSection]);

  return (
    <main className={styles.main}>
      <div ref={el => sectionsRef.current[0] = el}>
        <Diapositiva
          title="Comandos con Linux"
          text='Kevin Cerón Escalante'
          imageUrl={pinguino}
        />
      </div>

      <div ref={el => sectionsRef.current[1] = el}>
        <Diapositiva
          title="La shell de Linux"
          imageUrl={linuxShell}
        >
          {/* Contenido de la diapositiva */}
        </Diapositiva>
      </div>

      <div ref={el => sectionsRef.current[2] = el}>
        <Consola />
      </div>
    </main>
  );
}
