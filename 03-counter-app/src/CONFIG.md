# Unit Tests
Para la parte de pruebas se tiene que ejecutar `npm run test` para que se empicen a ejecutar las pruebas de los archivos `.test.js`.
___________

### Configuración de Enzyme

Paralas usar Enzyme con React > 17 se deben instalar las dependencias de la siguiente manera:

__Instalar Enzyme adapter__

`npm install --save-dev @wojtekmaj/enzyme-adapter-react-17`

__Instalar Enzyme__

`npm install --save-dev enzyme`

Una vez que se tiene esto, se debe utilizar el archivo __*setupTests.js*__ que se encuentra en la carpeta __/src__ (Si no existe se debe crear el archivo), en este archivo se debe agregar las siguientes líneas:

```js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmajenzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) );
```

Para hacer las pruebas con Enzyme es suficiente con importar sólo las primeras dos líneas de _Enzyme_ y _Adpter_ lo demás del código funciona para usar Snapshots con el dom de React y hacer paruebas con la aplicación dentro del dom. Además de la configuración del archivo __*setupTests.js*__ también en el archivo donde se vayan a generar las pruebas (Ejemplo: `src/prueba.test.js`) se debe de importar las siguientes líneas:

```js
import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
```

Para más información acerca de __*Enzyme*__ y __*snapshotSerializer*__ puede consultar la documentación en:
[Enzyme](https://enzymejs.github.io/enzyme/)
[enzyme-to-json](https://www.npmjs.com/package/enzyme-to-json)
[Enzyme para React 17 (Beta)](https://github.com/wojtekmaj/enzyme-adapter-react-17)
_____