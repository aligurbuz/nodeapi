#requirements:
node install

## nodeapi
Simple Rest Api For Node.Js

## clone url

```
git clone https://github.com/aligurbuz/nodeapi.git folderName

cd folderName

```

## load library called as node_modules for your application

```
npm update

npm install

```

## create your first rest api service

```
node commands/api create --dir node --ghost index

```

* Params :

```diff
- dir param : application name... (node as default).You can create new application name as appname/v1 in app/api
- ghost param : service name... index is file name as default..service wants as obligatory for access (http://ip:3000/api/node/service/ghost)

```


## yes!!! it worked and as output:

> api create handle file process has been done

> api create source file process has been done

> api create model file process has been done

> api create process has been done


## we can start our application now

```
forever start app.js

```



## visit on browser the service that you created

```
http://ip:3000/api/node/service/ghost

```


* how to change port :

```diff
- you can adjust it with the port object to be changed in [config/config.js] file

OR :

node commands/port change --port portNumber

```

* Service access information :

```diff
+ service/ghost :calls index method in app/api/node/v1/ghost/index.js (actually it is service/ghost/index)
+ service/ghost/foo :calls foo method in app/api/node/v1/ghost/index.js

```

>yes,wow!!! you see output as result : hello service.. Long live!

>you can see index.js file in app/api/node/v1/ghost/


## Service access with token on url :

```diff
+ go to config/token.js file
+ write any ip number instead of 'none' in accessWithoutToken method
+ yes,you can't access without token except the specified ip number to service any more
+ token names is token object in TokenForUsers method and is 'myToken' as default
+ now, go to http://ip:3000/api/node/service/ghost?_token=myToken

```


## Token Restrictions :

```diff
- method name : restrictions in config/config.js file
- if you want to user to access both token and specified ip number, write token name to none object restrictions method and change it's ip

```

## Service Branching :

> Source Directory : it directly sends data to service main file (index.js)
> in this directory can be one and more file.

* how to transfer to data to main file (index.js) from index.js that in source directory :

```diff

//source/index/index.js
//method index

source.get(function(result){
  callback(result)
})


//source/index/index.js
//method foo

source.method("foo").get(function(result){
  callback(result)
})

```



* how to transfer to data to main file (index.js) from any file that in source directory :

```diff

//source/index/foo.js
//method index

source.name("foo").get(function(result){
  callback(result)
})


//source/index/foo.js
//method bar

source.name("foo").method("foo").get(function(result){
  callback(result)
})

```


* how to transfer to data to main file (index.js) from any service content that in source directory :

```diff

//source/otherservice/index.js
//method index

source.service("otherservice").get(function(result){
  callback(result)
})

//name and method can be used

```

* model and handle connection

```diff
- model Branching : it can be used as source.src("model")..
+ handle Branching : it can be used as source.src("handle")..

```


## Database Connection :

```diff
+ config/database : set your database settings in config/config.js
+ environment : development is local area,other is production area

```
