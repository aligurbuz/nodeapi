# nodeapi
Simple Rest Api For Node.Js

# clone url
git clone https://github.com/aligurbuz/nodeapi.git

# project start for node_modules
npm install

# create api service
node commands/api create --dir app --ghost index
node commands/api create --dir app --ghost example

# create source/model/handle/ with directory without service
node commands/api create --dir app --ghost foo --no index

# create single file in source/model/handle/
node commands/api create --dir app --file ghost:source:index:bar
(creates a file named app/:version/ghost/source/index/bar.js)

# export in model directory all existing table in db
node commands/dbschema get

# creating db model
node commands/model create --model user

# call api service with browser
http://ip:3000/api/app/ghost/?_token=testuser

http://ip:3000/api/app/ghost_example/?_token=testuser

# web interface
http://ip:3000/blog

http://ip:3000/api/admin/login

# service start
npm start
