<h1 align="center"> Trabajo Práctico </h1>
<h2 align="center">HTTP/HTTPS</h2>
<h3>Preguntas generales</h3>
<ul>
  <li>¿Qué es HTTP y cuál es su función principal?</li>
  <p>HTTP es un protocolo o conjunto de reglas de comunicación que sirve para la comunicación de red.</p>
  <li>¿Cuál es la diferencia entre HTTP y HTTPS?</li>
   <p>HTTPS es una extensión de HTTP, es otra version donde el navegador y el servidor establecen una conexion segura y cifrada antes de transferir datos</p>
    
  <li>¿Cómo funciona el proceso de cifrado en HTTPS?</li>
   <p>Se encriptan las comunicaciones con un protocolo llamado TLS (o antes SSL) que asegura 
   las comunicaciones mediante el uso de una infraestructura que, como sistema de seguridad, usa dos
   claves diferentes para encriptar la comunicacion en dos partes: una clave privada controlada por
   el propietario de un sitio web y una clave publica que esta disponible para todos
   los que quieran interactuar con el servidor de forma segura.</p>
    
  <li>¿Qué es un certificado SSL/TLS y cuál es su importancia en HTTPS?</li>
   <p>Un certificado SSL/TLS es importante en HTTPS ya que mantiene seguros los datos del usuario y verifican que un determinado proveedor 
   es quien dice ser. Funciona de manera que encripta la clave en dos partes como mencioné en la pregunta
   anterior. </p>
    
  <li>¿Qué es un método HTTP? ¿Podrías enumerar algunos de los más utilizados?</li>
   <p>Los metodos HTTP son funcionalidades que nos permiten solicitar datos al servidor, enviar algun recurso en especifico o eliminarlo. Ejemplo: GET, POST, PUT, DELETE.</p>
    
  <li> Explica las diferencias entre los métodos HTTP GET y POST.</li>
   <p>El metodo GET se usa para solicitar un recurso del servidor web, al usarlo se obtienen datos.
   En cambio, con el metodo POST se puede enviar una entidad a un recurso en especifico, realizando cambios en el servidor.</p>
    
  <li> ¿Qué es un código de estado HTTP? ¿Podrías mencionar algunos de los más comunes y lo que significan?</li>
   <p>Es un mensaje que el servidor de un sitio envia al navegador para indicar si una solicitud puede ser 
   cumplida o no. Por ejemplo, los mas comunes son un rango de errores dados por tres numeros: 1xx(Informacional),
   2xx(Exito), 3xx(La pagina solicitada se movio a otro lugar), 4xx (error del cliente, hay algo mal en la forma en 
   el que navegador solicitó la pagina), 5xx (error de servidor, algo salio mal en la forma en que el servidor intentó enviar la pagina).</p>
    
  <li>¿Qué es una cabecera HTTP? Da ejemplos de cabeceras comunes.</li>
   <p>Las cabeceras contienen informacion de metadatos como por ejemplo informacion de autenticacion de seguridad.
   Se usa principalmente para la coordinacion entre el cliente y el servidor, para que el cliente
   pueda conocer la forma del archivo, saber si se esta actualizando. Ejemplo: server (indica el tipo de servidor http empleado,
   age (indica el tiempo que ha estado el objeto servidor almacenado en un proxy cache), location (se usa para especificar
   una nueva ubicacion en caso de redirecciones), etc. </p>
    
  <li>¿En qué consiste el concepto de "idempotencia" en los métodos HTTP? 
    ¿Qué métodos cumplen con esta característica?</li>
   <p>El concepto idempotencia en los metodos http hace que las operaciones idempotentes produzcan el mismo
   resultado incluso cuando la operacion se repite muchas veces. Cumplen con esto los metodos GET, HEAD, PUT, DELETE,
   OPTIONS Y TRACE. </p>
  
  <li> ¿Qué es un redirect (redirección) HTTP y cuándo es utilizado?</li>
 <p>Es una instruccion que se usa para enviar a los usuarios de una pagina web a una ubicacion diferente a la
 original. Se puede usar para redirigir el trafico de una pagina antigua a una nueva, para corregir enlaces rotos o para
 redireccionar automaticamente a los usuarios a una version especifica de la web segun su ubicacion o dispositivo. </p>
  
</ul>

<h3>Preguntas técnicas y de seguridad:</h3>
  <li>¿Cómo se asegura la integridad de los datos en una conexión HTTPS?</li>
     <p>En HTTPS se asegura la integridad de los datos connsu protocolo de encriptación ya que permite que 
     si los paquetes son interceptados no puedam ser leidos, garantizando una conexion segura.</p>
    
  <li>¿Qué diferencia hay entre un ataque de "man-in-the-middle" y un ataque de "replay" 
    en un contexto HTTPs?</li>
     <p>Es un ataque que busca interceptar sin autorizacion la comunicacion entre dos dispositivos host conectados a una red, 
     lo que permite manipular el trafico para escuchar la comunicacion y obtener informacion sensible, en cambio,
     un Replay Attack es una tecnica para interceptar y reutilizar comunicaciones legítimas con el fin de engañar 
     a un sistema o red. No se alteran los datos, sino que se capturan y se retransmiten para que el sistema 
     objetivo los acepte como validos.</p>
    
  <li>Explica el concepto de "handshake" en HTTPS.</li>
    <p>Handshake es una practica para establecer comunicaciones entre dos dispositivos y es clave para
    garantizar una comunicacion de datos fiable, eficiente y segura entre dispositivos.</p> 
    
  <li>¿Qué es HSTS (HTTP Strict Transport Security) y cómo mejora la seguridad de una aplicación web?</li>
    <p>Es una caracteristica de seguridad que permite a un sitio web indicar a los navegadores que solo se debe
    comunicar con HTTPS en lugar de usar HTTP garantizando una comunicacion mas confiable y segura al usar HTTPS.</p> 
    
  <li>¿Qué es un ataque "downgrade" y cómo HTTPS lo previene?</li>
     <p>Es un ataque que utiliza las vulnerabilidades del sistema forzandolo a utilizar protocolos anticuados 
     y menos seguros, esto puede provocar el robo de datos o la toma de control del sistema, por lo que hay que utilizar 
     HTTPS para garantizar una transmision de datos segura y activar HSTS.</p>
    
  <li>¿Qué es el CORS (Cross-Origin Resource Sharing) y cómo se implementa en una aplicación web?</li>
     <p>Es un intercambio de recursos de origen cruzado, basado en cabeceras HTTP que permite a un servidor 
     indicar cualquier dominio o puerto con un origen distinto del suyo desde el que un navegador deberia permitir 
     la carga de recursos. Se utiliza agregando cabeceras HTTP.</p>
    
  <li>¿Qué diferencia hay entre una cabecera Authorization y una cabecera Cookie?</li>
     <p>Una cabecera Authorization son para los datos de autenticacion, en cambio una cabecera Cookie dara 
     las cookies almacenadas para ese servidor</p>
    
  <li>¿Qué son las cabeceras de seguridad como Content-Security-Policy o X-Frame-Options?
    ¿Cómo ayudan a mitigar ataques comunes?</li>
     <p>La cabecera Content-Security-Policy son las politicas de seguridad del servidor, ayuda a preveir y mitigar
     algunos tipos de ataque. X-frame-options puede ser usado para evitar ataques de click-jacking asegurandose 
     de que su contenido no es embebido en otros sitios.</p>
    
  <li>¿Cuáles son las diferencias entre HTTP/1.1, HTTP/2 y HTTP/3?</li>
     <p>HTTP/1.1 es la primera version de HTTP, las demas son versiones actualizadas del mismo protocolo donde
       se modifico el sistema de transferencia de datos para hacerlo mas eficiente.
     HTTP/2 intercambia datos en binario en vez de textual, en cambio, HTTP/3 busca soportar el streaming en 
     tiempo real.</p>
    
  <li>¿Qué es un "keep-alive" en HTTP y cómo mejora el rendimiento de las aplicaciones?</li>
 <p>Se refiere a las conexiones de comunicacion en una red que no estan terminadas pero que 
 se mantienen hasta que el cliente o servidor interrumpe la conexion. Funciona a partir de 
 un esquema de solicitud respuesta. Puede servir para evitar la generacion de multiples mensajes de error.</p>


 <h3>Preguntas de implementación práctica:</h3>
  <li>¿Cómo manejarías la autenticación en una API basada en HTTP/HTTPS? ¿Qué métodos
  conoces (Basic, OAuth, JWT, etc.)?</li>
   <p>Para proteger la comunicación entre una API y http/https lo ideal es que se habilite https solo para el cifrado</p>
  
  <li>¿Qué es un proxy inverso (reverse proxy) y cómo se utiliza en entornos HTTP/HTTPS?</li>
   <p>Es un servidor que se situa delante de los servidores web e intercepta y reenvia las solicitudes del cliente a esos 
   servidores web. Se usa para aumentar la seguridad, rendimiento y la fiabilidad</p>
  
  <li>¿Cómo implementarías una redirección automática de HTTP a HTTPS en un servidor?</li>
   <p></p>
  
  <li>¿Cómo mitigarías un ataque de denegación de servicio (DDoS) en un servidor HTTP?</li>
   <p>Los ataques DDoS sobrecargan o inundan una maquina con solicitudes hasta que el trafico normal es incapaz de ser 
   procesado, lo cual genera una denegacion de servicio. Se podria mitigar detectando la fuente del ataque y 
   bloqueando el IP del pais.</p>
  
  <li>¿Qué problemas podrías enfrentar al trabajar con APIs que dependen de HTTP, y cómo los resolverías?</li>
   <p>Podria haber problemas cuando hay confusion entre los protocolos http y https en las url, ya que 
   algunas API solo admiten uno de los dos protocolos. </p>
  
  <li>¿Qué es un cliente HTTP? ¿Mencionar la diferencia entre los clientes POSTMAN y CURL?</li>
 <p>Un cliente HTTP es cualquier aplicacion que se comunica con un servidor web utilizando el
 protocolo HTTP, POSTMAN al ser una aplicacion de desarrollo que permite a los desarrolladores interactuar
 y probar el funcionamiento de servicios web y aplicaciones, es tambien uun cliente HTTP. Un cliente CURL es una linea
 de comandos que permite el intercambio de datos entre un dispositivo y un servidor a traves de una terminal. </p>

 
 <h2 align="center">GIT</h2>
  <li>¿Qué es GIT y para qué se utiliza en desarrollo de software?</li>
   <p>Git es unsistema de control de versiones donde se pueden manejar proyectos de manera rapida y eficaz, mas que nada en el ambito colaborativo.
   En el desarrollo de software se utiliza para trabajar de manera colaborativa y tener control de las diferentes versiones de un proyecto, como así ver la modificaciones que se le hacen al mismo. </p>
  
  <li>¿Cuál es la diferencia entre un repositorio local y un repositorio remoto en GIT?</li>
   <p>Un repositorio remoto son versiones de nuestro proyecto alojados en internet o cualquier otra red,
   en cambio, un repositorio local se encuentra en el equipo del usuario lo cual permite trabajar sin conexion.</p>
  
  <li>¿Cómo se crea un nuevo repositorio en GIT y cuál es el comando para inicializarlo? 
    Explica la diferencia entre los comandos git commit y git push.</li>
   <p>Para crear un nuevo repositorio en GIT se usa git init, este nos va a crear un repositorio
   de la carpeta en la que estamos posicionados de manera local, tambien se le podria poner el nombre de la carpeta
   y lo creará. Git commit se usa para subir nuestros archivos al repositorio creado usando git commit -m "comentario 
   o descripcion del trabajo o cambio realizado", en cambio, git push sirve para subir esos commits alojados
   en el repositorio local al repositorio remoto.</p>
  
  <li>¿Qué es un "branch" en GIT y para qué se utilizan las ramas en el desarrollo de software?</li>
   <p>Un branch en git permite crear otra rama al trabajo para realizar cambios, solucionar problemas o 
   probar funciones. Con esto, nos da la oportunidad de experimentar en el codigo sin tener que afectar la rama
   principal. En todo caso, una vez que haya arreglado el problema o probado lo que necesitaba, puedo
   añadir la rama adicional a la rama principal.</p>
  
  <li>¿Qué significa hacer un "merge" en GIT y cuáles son los posibles conflictos que pueden surgir 
    durante un merge?</li>
   <p>Hacer un merge en git significa que podemos fusionar esas ramas con la rama master. Como problema que puede
   surgir es que al fusionar con la rama principal, se actualiza esta de manera definitiva.</p>
  
  <li>Describe el concepto de "branching model" en GIT y menciona algunos modelos comunes 
    (por ejemplo, Git Flow, GitHub Flow).</li>
   <p>Branching model es una estrategia que usan los equipos de desarrollo para incorporar funcionalidades
   o hacer una correccion y fusionarlo, enviando al repositorio. Permite que los equipos que trabajan en
   una misma base de codigo fuente no afecten su codigo entre ellos. Ejemplo, github flow que es una estrategia
   de ramificacion ideal para equipos de desarrollo pequeños con solidas habilidades de comunicacion.</p>
  
  <li>¿Cómo se deshace un cambio en GIT después de hacer un commit pero antes de hacer push?</li>
   <p>Hay dos maneras de deshacer el commit, manteniendo los cambios con git reset --soft(hace que la rama actual
   retroseda a la revision que le indicamos) o sin mantener los cambios usando --hard</p>
   
  <li>¿Qué es un "pull request" y cómo contribuye a la revisión de código en un equipo?</li>
   <p>Al usar un pull request se solicita que otro desarrollador incorpore una rama de nuestro repositorio
   al suyo. En un entorno de trabajo se usa para que otros miembros del equipo revisen, comenten y aprueben cambio
   realizados en una rama de desarrollo-</p>
  
  <li>¿Cómo puedes clonar un repositorio de GIT y cuál es la diferencia entre git clone y git pull?</li>
 <p>Utilizando git clone puedo obtener una copia de un repositorio Git existente, en camio git pull es un comando
 usado para actualizar la version local de un repositorio desde otro remoto. </p>
 
 <h2 align="center">Node.JS</h2>
 
  <li>¿Qué es Node.js y por qué es una opción popular para el desarrollo backend?</li>
   <p>Node.js es un entorno de ejecucion usado para JavaScript en los servidores, permite ejecutarlo sin 
   necesidad de un navegador web. Simplifica procesos ampliando las capacidades de Javascript y permitiendo
   a los desarrolladores construir aplicaciones escalables y de alto rendimiento. Ideal para tareas que involucran
   el procesamiento rapido de grandes volumenes de datos.</p>
   
  <li>¿Cómo funciona el modelo de I/O no bloqueante en Node.js y cómo beneficia el rendimiento
  de una aplicación backend? </li>
   <p>El modelo no bloqueante funciona de modo que se libera el flujo de ejecucion, de manera que el
   proceso que inicio la accion puede atender otras necesidades del lenguaje. Puede beneficiar a los 
   servicios web en lo que se debe atender un gran numero de usuarios.</p>
   
  <li>¿Qué es el Event Loop en Node.js y cuál es su papel en la ejecución de código asincrónico?
  ¿Cuál es la diferencia entre require() y import en Node.js?</li>
   <p>El event loop se encarga de implementar operaciones asincronicas, corre en el unico hilo que existe en 
   Node y al bloquear este unico hilo, se bloquea el event loop. Un require es la forma de importar modulos
   en JavaScript, un modulo externo se carga de manera sincrona (detiene la ejecucion del codigo hasta
     que el modulo se haya cargado por completo) y su contenido se asigna a una variable, import se
   utiliza para gestionar modulos externos y es asincronico por naturaleza (no bloquea la ejecucion del 
   codigo, lo cual mejora el rendimiento en aplicaciones grandes.</p>
   
  <li>¿Qué es npm y cuál es su función en el ecosistema de Node.js?</li>
   <p>La sigla npm es un manejador de paquetes de node, es la herramienta por defecto de JavaScript para la tarea
   de compartir e instalar paquetes</p>
   
  <li>¿Cómo se inicializa un proyecto de Node.js usando npm y cuál es el propósito del archivo
  package.json?</li>
   <p>Se inicializa un proyecto con npm init. El archivo package.json indica a npm que el directorio en el que se encuentra es un proyecto
   o paquete npm. El archivo tiene la informacion del paquete incluyendo la descripcion del mismo.</p>
   
  <li>¿Qué son las dependencias en npm y cómo se instalan? Explica la diferencia entre
  dependencias y dependencias de desarrollo</li>
   <p>Las dependencias en npm son paquetes que permiten al desarrollador ahorrar tiempo o esfuerzo. 
   Se instalan utilizando el comando install. Las dependencias de desarrollo son los paquetes que necesitamos
   en un proyecto mientras estamos desarrollandolo pero que una vez tenemos el proyecto generado, no vuelven a hacer falta.
   </p>
   
  <li>¿Cómo puedes gestionar versiones específicas de paquetes en npm y para qué sirve el
  archivo package-lock.json?</li>
   <p> package-lock.json es un  archivo autogenerado por npm install y es una lista descriptivca de las versiones instaladas durante el proceso.</p>
   
  <li>¿Qué es nest.js cómo se usa en Node.js para construir aplicaciones backend?</li>
   <p>Nest.js es un framework progresivo de node.js para la creacion de aplicaciones eficientes y confiables
   del lado del servidor, el cual esta construido y es compatible con typescript. Nos permite utilizar otras 
   bibliotecas existentes en nuestros proyecto, proporciona versatibilidad. </p>
  
  <li>¿Cómo se manejan errores en Node.js y cuál es la diferencia entre callbacks, promesas 
    y async/await para manejar código asincrónico?</li>
 <p>En node los errores estan representados por objetos de error. Un callback es una funcion que se pasa dentro
 de otra funcion y luego se lo llama dentro de esa funcion para realizar una tarea. Las promesas son
 algo que tomará tiempo en hacerse, se puede ejecutar y resolver la promesa o algun error ocurre a lo largo de 
 la linea y la promesa es rechazada. Asyn y await son formas de de definir una funcion. Async define funciones asincronas, mientras que
 awaot se usa dentro de una funcion async para esperar a que se resuelva la promesa antes de continuar.</p>

<h2 align="center"> Práctica </h2>
<h3>Preguntas de ejercicios</h3>
  <li>Adjuntar imagenes del response de un GET y de un POST de cada punto</li>
   <p>Las imagenes de dichos responses se encuentran en la carpeta "Capturas".</p>
  
  <li>¿Qué sucede cuando hacemos el GET por segunda vez, luego de haber ejecutado
el POST?</li>
<p>Al hacer el GET por segunda vez, aparece nuestra información actualizada previamente en el POST como datos almacenados en el servidor.</p>
  







