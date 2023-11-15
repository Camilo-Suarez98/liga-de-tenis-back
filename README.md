# Liga de Tenis NJS - Una aplicación para ver y participar en torneos de Tenis 🎾


- Construido con Node.js, Express y MongoDB (Mongoose).
- REST API.

## Prerrequisitos

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/es)
- [Express](https://expressjs.com/)
- [Morgan](https://www.npmjs.com/package/morgan)
- [CORS](https://www.npmjs.com/package/cors)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cloudinary](https://cloudinary.com/)
- [Busboy](https://www.npmjs.com/package/busboy)
- [JSON-webtoken](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Rutas

| Ruta                        | HTTP Verb | Route middleware         | Descipción                             |
| -----------------------------| --------- | -------------------------|-----------------------------------------|
| /api/tournament                   | GET       |                          | Lista de torneos                       |
| /api/tournament/:id                   | GET       |                          | Detalle de un torneo 
| /api/tournament                   | POST      |                          | Crea un nuevo torneo                      |
| /api/tournament/:id  | DELETE       | isAuthenticated          | Elimina un torneo                      |
| /api/tournament/:id              | PUT       | isAuthenticated          | Actualiza informaión del torneo              |



## Uso
El proyecto incluye aproximadamente 10 endpoints funcionales. La tabla anterior es un ejemplo de la ruta `/api/tournament`. Si necesitas crea un torneo aqui esta el ejemplo para hacerlo (Solo el usuario administrador puede cear, editar o eliminar los torneos).

### Ejemplo: **Creación de un torneo**:

Cuerpo de la solicitud:
```json
{
  "name": "Torneo abierto de la amistad",
  "Description": "Torneo amateur para que amigos vengan y disfruten de un apasionante torneo de tenis",
  "date": "15-12-2023",
  "location": "Casa de Campo",
  "city": "Ciudad deportiva",
  "price": "20000"
}
```

Respuesta:
```json
{ 
  "message": "Tournament created sucesfully"
}
```

Una vez que el administrrador ha creado el torneo, esta es la respuesta:
```json
{
  "message": "User created succesfully",
  "data": {
    "_id": "id",
    "name": "Torneo abierto de la amistad",
    "Description": "Torneo amateur para que amigos vengan y disfruten de un apasionante torneo de tenis",
    "date": "15-12-2023",
    "location": "Casa de Campo",
    "city": "Ciudad deportiva",
    "price": "20000",
    "participants": [],
    "createdAt": "date-of-user-created",
    "updatedAt": "date-of-user-updated"
  }
}
```

### Desarrollo

1. Corre el comando `npm install` para instalar las dependencias.

2. Crea un archivo `.env` y configura las variables de entorno con los siguientes nombres (Te dejo un archivo .env.example como guia).

3. Corre `npm run dev` para iniciar el servidor de desarrollo.