# Portal de Candidatos - Challenge Nimble Gravity

Esta es una aplicación web interactiva construida con **React** que permite a los usuarios gestionar su postulación a diferentes vacantes de trabajo de manera sencilla y eficiente.

## 📝 ¿Cómo funciona la aplicación?

El flujo de la aplicación es automático y amigable para el usuario:

1.  **Identificación**: Al ingresar, la app busca automáticamente tu perfil de candidato usando tu correo electrónico.
2.  **Exploración**: Se muestra una lista de posiciones abiertas (como Fullstack Developer, Head Chef, etc.) obtenidas directamente desde el servidor.
3.  **Postulación**: En cada vacante, puedes ingresar el enlace de tu repositorio de GitHub y enviarlo con un solo clic.

## 🛠️ Características Técnicas

* **Interfaz Dinámica**: La lista de empleos y la información del usuario se actualizan en tiempo real sin recargar la página.
* **Validación de Datos**: El sistema se asegura de enviar la información exactamente como el servidor la necesita (IDs numéricos, enlaces limpios y códigos de seguridad UUID).
* **Hooks de React**: Utiliza lógica personalizada para separar el diseño de la comunicación con la base de datos, haciendo el código más ordenado.

## ⚠️ Requisito Indispensable

Para que la aplicación funcione y muestre las vacantes, **es necesario ser un candidato registrado** en la base de datos de Nimble Gravity. El sistema utiliza el correo electrónico configurado para validar la existencia del perfil; si el correo no está registrado, la aplicación no podrá recuperar los datos de acceso necesarios para postularse.

## 🚀 Pasos para ejecutarlo

Para probar el proyecto localmente, sigue estos pasos:

1.  **Clonar este proyecto**:
    `git clone https://github.com/saibot04/Challenge-Nimble-Gravity`
2.  **Instalar las carpetas necesarias**:
    `npm install`
3. Configurar credenciales (`.env`)
  **Este paso es obligatorio** para que la app pueda consultar los datos:
    * **Localiza el archivo** `.env.example` en la raíz del proyecto.
    * **Renómbralo** a `.env`.
    * **Configura** tus variables dentro del archivo:
       * **`VITE_CANDIDATE_EMAIL`**: Coloca el mail con el que fuiste registrado en el challenge.
       * **`VITE_API_BASE_URL`**: La URL base de la API proporcionada.

> **Nota**: El archivo `.env` está excluido del control de versiones por seguridad a través de `.gitignore`.
4.  **Lanzarlo**:
    `npm run dev`

## 🧠 Desafíos Técnicos y Depuración
Durante el desarrollo se trabajó intensamente en la depuración de respuestas **400 Bad Request**. Para solucionar esto, implementé el siguiente proceso de diagnóstico:

* **Pruebas en Postman**: Validé los endpoints de forma aislada para entender el comportamiento de la API.
* **Solución**: Una vez identificado el campo faltante mediante el monitoreo de red, ajusté el objeto enviado en el `POST` para cumplir con los requisitos exactos de la documentación.
---
Creado por **Tobias Fernandez** para el proceso de selección de Nimble Gravity.
