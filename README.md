# Inicialización del proyecto con docker

Para incializar el proyecto con docker, lo que se debe hacer es en el archivo de configuración definir las credenciales de acceso para la base de datos de mongo.

Para ello en el archivo de *docker-compose.yml* se deben cambiar los siguientes valores de las variables de entorno:

* "\<User>": este define el nombre de usuario root de la base de datos de mongodb.
* "\<Pass>": este define la contraseña para el usuario root.
* "\<TuCodigoSecreto>": este codigo puede ser una serie de caracteres, se utiliza para <a href="https://payloadcms.com/docs/production/deployment#the-secret-key">PayloadCMS</a>.

Una vez se configuren las variables de entorno se puede inicializar los contenedores con un *docker compose up -d* para luego entrar en el puerto localhost:3040/admin y así comenzar con las configuraciones básicas del payloadcms
