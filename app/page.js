"use client"
import styles from './page.module.css'
import Image from 'next/image';
import Diapositiva from './_Components/Diapositiva/Diapositiva'
import { Box, Grid, Typography } from '@mui/material'
import Consola from './_Components/Consola/Consola'

//Importacion de imagenes shell
import pinguino from '../public/images/tux-327x360.png'
import linuxShell from '../public/images/shell/1689177424548.png'
import comandHash from '../public/images/shell/hash.png'

// Importacion de imagenes ficheros
import sistemaFicheros from '../public/images/ficheros/sistemaFicheros.png'
import wildCard from '../public/images/ficheros/Wildcards.jpg'
import shellExpansion from '../public/images/ficheros/shellExpansion.png'

// Importacion de imagenes usuarios 
import usuarios from '../public/images/usuarios/usuarios.png'
import permisos from '../public/images/usuarios/permisosefectivos.webp'


export default function Home() {
  return (
    <main className={styles.main}>
      <Diapositiva
        title="Comandos con Linux"
        text='Kevin Cerón Escalante'
        imageUrl={pinguino}
      />

      <Diapositiva
        title="La shell de Linux"
        imageUrl={linuxShell}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2, }}>
          <ul>
            <li>
              <Typography variant="h4">Comandos internos</Typography>
            </li>
            <li>
              <Typography variant="h4">Comandos externos</Typography>
            </li>
            <li>
              <Typography variant="h4">Hashing de comandos</Typography>
            </li>
          </ul>
        </Box>
      </Diapositiva>

      <Diapositiva title="Tipos de comandos">
        <Grid container spacing={40}>
          <Grid item lg={6} sx={{ marginTop: '2vh', }}>
            <Typography variant='h3'>Internos</Typography>
            <ul>
              <li><Typography variant='h4'> cd </Typography></li>
              <li><Typography variant='h4'> echo </Typography></li>
              <li><Typography variant='h4'> history </Typography></li>
            </ul>
          </Grid>
          <Grid item lg={6} sx={{ marginTop: '2vh', }}>
            <Typography variant='h3'>Externos</Typography>
            <ul>
              <li><Typography variant='h4'> ls </Typography></li>
              <li><Typography variant='h4'> grep </Typography></li>
              <li><Typography variant='h4'> awk </Typography></li>
            </ul>
          </Grid>
        </Grid>
      </Diapositiva>

      <Diapositiva title='Hashing de comandos' imageUrl={comandHash} />

      <Consola />

      {/* Seccion 5 */}
      <Diapositiva title='Estructura directorio Linux'>
        <Box data-aos="zoom-in" sx={{ marginTop: '5vh' }}>
          <Image src={sistemaFicheros} alt='sistemaFicheros' className={styles.DImages} sx={{ width: '90vw', height: 'auto' }} />
        </Box>
      </Diapositiva>

      <Consola />

      {/* Seccion 6 */}
      <Diapositiva title="Inodos">
        <Grid container sx={{ marginTop: '10vh' }}>
          <ul>
            <li><Typography sx={{ marginTop: '1vh' }} variant='h4'> El número de inodo que identifica al archivo dentro del sistema de archivos. </Typography></li>
            <li><Typography sx={{ marginTop: '1vh' }} variant='h4'> La longitud del archivo en bytes y sus punteros. </Typography></li>
            <li><Typography sx={{ marginTop: '1vh' }} variant='h4'> El modo de acceso, que especifica los permisos de lectura, escritura y ejecución. </Typography></li>
          </ul>
        </Grid>
      </Diapositiva>

      <Diapositiva title="Dentries">
        <Grid container sx={{ marginTop: '10vh' }}>
          <ul>
            <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Sistemas de punteros entre dentries padres e hijos </Typography></li>
            <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Punteros hacia los inodos de los elementos dentro de la ruta </Typography></li>
            <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> El nombre del elemento de la ruta. Los nombres no son parte del inodo, sino del dentry. </Typography></li>
          </ul>
        </Grid>
      </Diapositiva>

      <Diapositiva title="Enlaces Simbólicos">
        <Grid container>
          <Grid item lg={12} sx={{ marginTop: '2vh', }}>
            <ul>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Modificar a través del enlace simbólico afecta al archivo original </Typography></li>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Eliminar el enlace no elimina el archivo real </Typography></li>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Si el archivo enlazado cambia de nombre, el enlace simbólico se rompe </Typography></li>
            </ul>
          </Grid>
        </Grid>
      </Diapositiva>

      <Diapositiva title='Enlaces Duros'>
        <Grid container>
          <Grid item lg={12} sx={{ marginTop: '2vh', }}>
            <ul>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Cada enlace duro es una copia exacta del archivo original en términos de datos </Typography></li>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Cuando se modifica un archivo a través de un enlace duro, los cambios se reflejan en todos los enlaces asociados. </Typography></li>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Los datos permanecen accesibles mientras haya al menos un enlace duro </Typography></li>
            </ul>
          </Grid>
        </Grid>
      </Diapositiva>

      <Box data-aos="zoom-in" >
        <Image src={wildCard} alt='wildones' sx={{ width: 'auto', height: '85vh' }} />
      </Box>

      <Diapositiva title='Shell Expansion' imageUrl={shellExpansion}></Diapositiva>

      <Consola />

      {/* Seccion 7 */}

      <Diapositiva title='Redirección del standard input y output'>
        <Typography variant='h5' sx={{ marginTop: '5vh' }}>La redirección del estándar de entrada y salida es una característica fundamental en el sistema operativo Linux que permite a los usuarios controlar el flujo de datos desde y hacia los programas y archivos. En Linux, los comandos y programas se ejecutan en una terminal, y la redirección es una forma poderosa de manipular la entrada y salida de estos programas. </Typography>
      </Diapositiva>

      <Diapositiva
        title="Pipelines en Linux"
      >
        <Box>
          <p>Concepto: Secuencia de comandos/programas para procesamiento de datos.</p>
          <p>Funcionalidad: Conexión de stdout a stdin entre comandos.</p>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Ventajas:</Typography>
          <ul>
            <li>Flujo de datos continuo y eficiente.</li>
            <li>Modularidad y mejor legibilidad.</li>
            <li>Simplificación de tareas complejas.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Aplicaciones:</Typography>
          <ul>
            <li>Filtrado y ordenamiento de datos.</li>
            <li>Transformaciones y resúmenes de datos.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Diapositiva title="Comandos de Filtros en Linux">
        <Box>
          <p>Definición: Programas para manipulación específica de datos.</p>
          <p>Rol en Pipelines: Elementos clave para tareas de procesamiento.</p>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Filosofía Unix:</Typography>
          <p>Hacer una cosa y hacerla bien.</p>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Ejemplos:</Typography>
          <ul>
            <li>grep: Búsqueda de patrones.</li>
            <li>sed: Transformaciones de texto.</li>
            <li>sort: Ordenamiento de líneas.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Diapositiva title="Búsquedas en Linux">
        <Box>
          <p>Importancia: Localización de archivos/contenido en el sistema.</p>
          <Typography variant='h5' sx={{ marginTop: '5vh', width: '100 vw' }}>Herramientas y Comandos:</Typography>
          <ul>
            <li>find: Búsqueda basada en criterios (nombre, tamaño, etc.).</li>
            <li>locate: Búsqueda rápida con base de datos indexada.</li>
            <li>grep: Búsqueda de patrones de texto en archivos.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh', width: '100 vw' }}>Usos:</Typography>
          <ul>
            <li>Gestión eficiente del sistema.</li>
            <li>Búsqueda por atributos variados.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Consola />

      {/* Seccion 8 */}

      <Diapositiva title='Tipos de usuarios en Linux' imageUrl={usuarios}>
        <Grid container>
          <Grid item lg={12} sx={{ marginTop: '2vh', }}>
            <ul>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Usuario Root </Typography></li>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Usuarios Especiales (bin, daemon, etc.) </Typography></li>
              <li><Typography sx={{ marginTop: '2vh' }} variant='h4'> Usuarios Normales </Typography></li>
            </ul>
          </Grid>
        </Grid>
      </Diapositiva>

      <Diapositiva title="Tipos de Permisos en Linux" imageUrl={permisos}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Tipos de Permisos:</Typography>
          <ul>
            <li><strong>Lectura (r):</strong> Permite leer archivos o listar el contenido de directorios.</li>
            <li><strong>Escritura (w):</strong> Permite modificar archivos o contenido dentro de directorios.</li>
            <li><strong>Ejecución (x):</strong> Permite ejecutar archivos o acceder a directorios.</li>
          </ul>
        </Box>
      </Diapositiva>



    </main>
  )
}