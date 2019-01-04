# Step 1: microservice with default route

1. create a new repo for your microservice and go inside
2. npm init -y
3. npm install --save micro micro-router
4. npm install --save-dev babel-cli babel-preset-es2015 rimraf
5. update package.json with new script (build and start)
6. Create new index.js file with micro code.
7. PORT=3123 npm run start
8. Use postman or directly curl and GET request on http://localhost:3123

# Step 2: create api endpoint with microrouter

# Step 3: add middleware - display log with winston
