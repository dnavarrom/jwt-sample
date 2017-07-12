# jwt-sample
Simple JWT Bearer Token API using jwt-simple, express and lokijs database

### Instalar:

git clone https://github.com/dnavarro/jwt-sample.git

cd jwt-sample

npm install

### Iniciar:

node index.js


### Uso:

#### Get Token:

```
curl -X POST \
  http://localhost:9000/api/v1/auth/login \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -H 'postman-token: 9ce7e776-6356-a053-ceaf-e35b672cb707' \
  -F userName=diego \
  -F password=123
```

#### Get Products:

```
curl -X GET \
  http://localhost:9000/api/v1/products \
  -H 'authorization: Bearer PLACE_YOUR_TOKEN_HERE \
  -H 'cache-control: no-cache' \
  -H 'postman-token: 90a6d8ae-e99f-90b5-0073-c21e62627176'
```

### Configuracion:

#### Configuraciones del API Server

Hostname y puerto de escucha, en caso de estar publicado y asociado a un DNS colocarlo aca
```
app_host: nombre / ip / dns del server
app_port: puerto por defecto 9000
```

#### Seguridad

Se aseguran las apis mediante JWT, de estar habilitado, primero se debe obtener un token desde /auth/login
```
 "seguridad" : {
    	"habilitado" : "true",
    	"jwt" : {
    		"TOKEN_SECRET" : "secreto"    //secret para la API, se usa para generar el JWT
    	}
    }
```
