#requirements:
node install

# nodeapi
Simple Rest Api For Node.Js

# clone url

```
git clone https://github.com/aligurbuz/nodeapi.git

```

# project start for node_modules

```
npm update

```

#create your first rest api service

```
node commands/api create --dir node --ghost index

```

* Params :

```diff
- dir param : application name... (node as default).You can create new application name as appname/v1 in app/api
- ghost param : service name... index is file name as default..service wants as obligatory for access (http://ip:3000/api/node/service/ghost)

```


#yes!!! it worked and as output:

> api create handle file process has been done

> api create source file process has been done

> api create model file process has been done

> api create process has been done


# we can start our application now

```
forever start app.js

```



#visit on browser the service that you created

```
http://ip:3000/api/node/service/ghost

```


* how to change port :

```diff
- you can change it with the port object to be changed in [config/config.js] file

```

* Service access information :

```diff
+ service/ghost :calls index method in app/api/node/v1/ghost/index.js (actually service/ghost/index)
+ service/ghost/foo :calls foo method in app/api/node/v1/ghost/index.js

```

>yes,wow!!! you see output as result : hello service

>you can see index.js file in app/api/node/v1/ghost/


# create source/model/handle/ with directory without service

```
node commands/api create --dir app --ghost foo --no index

```

# create single file in source/model/handle/

```
node commands/api create --dir app --file ghost:source:index:bar

```

(creates a file named app/:version/ghost/source/index/bar.js)

# export in model directory all existing table in db

```
node commands/dbschema get

```


# creating db model

```
node commands/model create --model user

```



# call api service with browser

http://ip:3000/api/app/ghost/?_token=testuser

http://ip:3000/api/app/ghost_example/?_token=testuser

# web interface

http://ip:3000/blog

http://ip:3000/api/admin/login
