# nodeapi
Simple Rest Api For Node.Js

# clone url
git clone https://github.com/aligurbuz/nodeapi.git

# project start for node_modules
npm install

# create api service
node commands/api create --dir app --ghost index

node commands/api create --dir app --ghost example

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
