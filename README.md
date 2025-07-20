# chistesnegros 🖤

[![npm version](https://img.shields.io/npm/v/chistesnegros.svg?style=flat-square)](https://www.npmjs.com/package/chistesnegros)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)

Paquete de chistes de humor negro en español para proyectos Node.js. Ideal para bots, aplicaciones de entretenimiento o cualquier proyecto que requiera un toque de humor ácido.

## 📋 Contenidos

- [Instalación](#instalación)
- [Uso básico](#uso-básico)
- [Ejemplos](#ejemplos)
  - [Node.js](#nodejs)
  - [Bot de Discord](#bot-de-discord)
  - [API con Express](#api-con-express)
- [Aportaciones](#aportaciones)
- [Advertencia](#advertencia)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## 🏆 Top 10 Aportadores de Chistes

Agradecemos a quienes han contribuido con sus chistes. ¡Aquí está el ranking de los usuarios que más han aportado!

<div align="center">

| 🥇 Puesto | 👤 Usuario      | 💬 Chistes aportados |
|:--------:|:--------------:|:-------------------:|
| 1        | **Krauser366** | 4                   |
| 2        | **GabrielVz**  | 4                   |

</div>

> ¿Quieres aparecer en el top?  
> ¡Envía tus en el formulario que se encuentra mas abajo!

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

Y envía tu chiste.

- O puedes unirte al Discord para sugerir chistes o reportar errores:  
  [https://discord.gg/wR7EqNShXX](https://discord.gg/wR7EqNShXX)

## 📄 Licencia

Este proyecto está bajo la licencia **GPL v3**. Consulta el archivo [LICENSE](https://github.com/Vicemi/chistesnegros/blob/main/LICENSE) para más detalles.
