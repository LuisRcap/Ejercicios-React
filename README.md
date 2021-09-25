# Ejercicios con React
-------------------------
El contenido en este repositorio son ejercicios y aplicaciones con el framework **React** hechos con el contenido del curso [*React: De cero a experto (Hooks y MERN)*](https://www.udemy.com/course/react-cero-experto/) impartido por Fernando Herrera en la plataforma Udemy.

**Nota:** Hay un problema con las últimas versiones de *React* que es cuando haces algún cambio en un proyecto no se refleja de forma automática en el navegador, esto se debe a que se reemplazó la función *hot-reload* por *fresh-reload* que es una función que aun está en modo experimental, para corregir esto lo único que se tiene que hacer es que en la raíz del proyecto se crea un archivo con el nombre **".env"** y dentro de este poner la siguiente línea:

`FAST-REFRESH=false`

Con esto sólo se debe ejecutar nuevamente el comando `npm start` y aahora los cambios se verán reflejados en el navegador automáticamente.