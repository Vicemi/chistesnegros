# chistesnegros 🖤

[![npm version](https://img.shields.io/npm/v/chistesnegros.svg?style=flat-square)](https://www.npmjs.com/package/chistesnegros)
[![License](https://img.shields.io/npm/l/chistesnegros?style=flat-square)](https://github.com/tu-usuario/chistesnegros/blob/main/LICENSE)

Paquete de chistes de humor negro en español para proyectos Node.js. Ideal para bots, aplicaciones de entretenimiento o cualquier proyecto que requiera un toque de humor ácido.

## 📋 Contenidos

- [Instalación](#instalación)
- [Uso básico](#uso-básico)
- [Ejemplos](#ejemplos)
  - [Node.js](#nodejs)
  - [Bot de Discord](#bot-de-discord)
  - [API con Express](#api-con-express)
- [Advertencia](#advertencia)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## 🚀 Instalación

```bash
npm install chistesnegros
```

## 🔧 Uso básico

<details>
<summary>CommonJS</summary>

```js
const obtenerChiste = require('chistesnegros');
console.log(obtenerChiste());
```
</details>

<details>
<summary>ES Modules</summary>

```js
import obtenerChiste from 'chistesnegros';
console.log(obtenerChiste());
```
</details>

## 📂 Ejemplos

### Node.js

```js
const obtenerChiste = require('chistesnegros');

console.log('Tu chiste del día:');
console.log(obtenerChiste());
```

### Bot de Discord

```js
const { Client, GatewayIntentBits } = require('discord.js');
const obtenerChiste = require('chistesnegros');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', message => {
  if (message.content === '!chiste') {
    message.channel.send(obtenerChiste());
  }
});

client.login('TU_TOKEN_AQUÍ');
```

### API con Express

```js
const express = require('express');
const obtenerChiste = require('chistesnegros');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/chiste', (req, res) => {
  res.json({ chiste: obtenerChiste() });
});

app.listen(PORT, () => {
  console.log(`API de chistes iniciada en http://localhost:${PORT}/chiste`);
});
```

## ⚠️ Advertencia

Este paquete contiene **humor negro** que puede resultar **ofensivo**. Está pensado **solo para adultos** o para personas con alto nivel de tolerancia al humor ácido.

## 🤝 Contribuir

¡Nos encantaría contar con tus chistes! Sigue estos pasos:

Entra a [vicemi.dev/chistesnegros](https://vicemi.dev/chistesnegros)

Y envia tu chistardo negrardo.

- O puedes unirte al Discord para sugerir chistes o reportar errores:  
  [https://discord.gg/wR7EqNShXX](https://discord.gg/wR7EqNShXX)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [https://github.com/Vicemi/chistesnegros/blob/main/LICENSE](LICENSE) para más detalles.
