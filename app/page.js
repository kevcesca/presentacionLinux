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

// Importacion de imagenes procesos
import proceso from '../public/images/procesos/procesos.webp'
import nice from '../public/images/procesos/procesos.png'
import demons from '../public/images/procesos/demons.png'
import estados from '../public/images/procesos/estados.png'

// Importacion de imagenes generales
import networking from '../public/images/networking.png'
import dispositivos from '../public/images/dispositivos.png'
import paquetes from '../public/images/paquetes.png'
import variables from '../public/images/variables.png'
import archivar from '../public/images/archivar.png'
import expresiones from '../public/images/expresiones.png'

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

      <Consola />

      {/* Seccion 9 */}
      <Diapositiva title="¿Qué son los procesos en Linux?" imageUrl={proceso}>
        <Box>
          <Typography variant='h5'>Un proceso es una instancia de un programa en ejecución, que incluye el código del programa, su actividad actual, y su estado en la memoria del sistema.</Typography>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Características:</Typography>
          <ul>
            <li>Identificado por un ID único (PID).</li>
            <li>Asociado con un usuario y un grupo específicos.</li>
            <li>Posee su propio espacio de memoria y recursos del sistema.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Diapositiva title="Estados de un proceso" imageUrl={estados}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Estados Básicos:</Typography>
          <ul>
            <li><strong>Ejecutándose (Running):</strong> El proceso está siendo ejecutado en la CPU.</li>
            <li><strong>Esperando (Waiting/Sleeping):</strong> El proceso espera por un evento o recurso.</li>
            <li><strong>Detenido (Stopped):</strong> El proceso ha sido detenido, por ejemplo, por una señal.</li>
            <li><strong>Terminado (Zombie/Defunct):</strong> El proceso ha terminado pero aún necesita ser removido de la tabla de procesos.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Diapositiva title="Demonios y servicios" imageUrl={demons}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Demonios (Daemons):</Typography>
          <ul>
            <li>Definición: Programas que se ejecutan en segundo plano, generalmente iniciados en el arranque del sistema.</li>
            <li>Ejemplos: `httpd` (servidor web), `sshd` (SSH daemon).</li>
            <li>Importancia en la gestión del sistema y servicios de red.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Servicios:</Typography>
          <ul>
            <li>Gestión a través de sistemas como `systemd` o `init`.</li>
            <li>Control de servicios con comandos como `systemctl`.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Diapositiva title="Cambio de prioridad nice" imageUrl={nice}>
        <Box>
          <p>Concepto: Cambiar la prioridad de ejecución de un proceso para gestionar la carga de trabajo de la CPU.</p>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Uso del Comando `nice` y `renice`:</Typography>
          <ul>
            <li>nice: Iniciar un proceso con una prioridad dada.</li>
            <li>renice: Cambiar la prioridad de un proceso en ejecución.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Consola />

      {/* Seccion 10 */}
      <Diapositiva title="Interfaces de Red y Direcciones IP en Linux" imageUrl={networking}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Interfaces de Red en Linux:</Typography>
          <ul>
            <li>Las interfaces de red son los dispositivos que permiten la comunicación en una red.</li>
            <li>En Linux, se identifican mediante nombres como eth0 o wlan0.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Direcciones IP en Linux:</Typography>
          <ul>
            <li>Las direcciones IP identifican los dispositivos en una red.</li>
            <li>En Linux, puedes configurar una dirección IP estática en el archivo /etc/network/interfaces o utilizar DHCP.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>DHCP (Protocolo de Configuración Dinámica de Host):</Typography>
          <ul>
            <li>DHCP asigna automáticamente direcciones IP a dispositivos en la red.</li>
            <li>Facilita la gestión de direcciones IP en entornos grandes.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Consola />

      {/* Seccion 11 */}
      <Diapositiva title="Paquetes, Librerías y Dependencias en Linux" imageUrl={paquetes}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>¿Qué es un paquete en Linux?</Typography>
          <ul>
            <li>Un paquete es un conjunto de software empaquetado junto con su información de instalación.</li>
            <li>Facilita la instalación y actualización de software en Linux.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>¿Qué es una librería en Linux?</Typography>
          <ul>
            <li>Una librería es un conjunto de funciones y código compartido por múltiples programas.</li>
            <li>Ayuda a ahorrar espacio en disco y mejorar la eficiencia del sistema.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>¿Qué es una dependencia en Linux?</Typography>
          <ul>
            <li>Una dependencia es un software que un programa necesita para funcionar correctamente.</li>
            <li>La gestión de dependencias es crucial para garantizar la estabilidad del sistema.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Consola />

      {/* Seccion 12 */}
      <Diapositiva title="Variables de Entorno en Linux" imageUrl={variables}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>¿Qué son las variables de entorno?</Typography>
          <p>Configuraciones que afectan el comportamiento de los programas en Linux.</p>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Tipos de variables de entorno:</Typography>
          <ul>
            <li><strong>Temporales:</strong> Valores válidos solo durante la sesión actual.</li>
            <li><strong>Permanentes:</strong> Valores que persisten entre sesiones.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Consola />

      {/* Seccion 13 */}
      <Diapositiva title="Dispositivos de Almacenamiento Externo en Linux" imageUrl={dispositivos}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>¿Qué son los dispositivos de almacenamiento externo?</Typography>
          <ul>
            <li>Son dispositivos portátiles que se conectan a una computadora para almacenar datos.</li>
            <li>Ejemplos comunes: discos duros externos, unidades flash USB, tarjetas de memoria.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Administración de dispositivos externos en Linux:</Typography>
          <ul>
            <li>Linux es compatible con una variedad de dispositivos de almacenamiento externo.</li>
            <li>La administración se realiza a través de comandos como mount y umount.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Consola />

      {/* Seccion 14 */}
      <Diapositiva title="Archivar y Comprimir en Linux" imageUrl={archivar}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Archivar en Linux</Typography>
          <ul>
            <li>Archivar en Linux significa agrupar varios archivos o directorios en uno solo.</li>
            <li>Facilita la organización y el transporte de datos.</li>
            <li>Comúnmente se utiliza el comando tar para archivar.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Comprimir en Linux</Typography>
          <ul>
            <li>Comprimir en Linux reduce el tamaño de archivos o directorios.</li>
            <li>Ahorra espacio en disco y acelera la transferencia.</li>
            <li>Se utiliza herramientas como gzip y zip para comprimir.</li>
          </ul>
        </Box>
      </Diapositiva>

      <Consola />

      {/* Seccion 15 */}
      <Diapositiva title="Expresiones Regulares en Linux" imageUrl={expresiones}>
        <Box>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Definición y diferencias clave</Typography>
          <ul>
            <li>ERE (Expresiones Regulares Extendidas) y BRE (Expresiones Regulares Básicas) son dos tipos de expresiones regulares en Linux.</li>
            <li>ERE admite más metacaracteres y es más flexible que BRE.</li>
          </ul>
          <Typography variant='h5' sx={{ marginTop: '5vh' }}>Símbolos para expresiones regulares</Typography>
          <ul>
            <li>Los símbolos como ., *, y + son comunes en las expresiones regulares.</li>
            <li>Permiten patrones de búsqueda avanzada y filtrado de texto.</li>
          </ul>
        </Box>
      </Diapositiva>


    </main>
  )
}