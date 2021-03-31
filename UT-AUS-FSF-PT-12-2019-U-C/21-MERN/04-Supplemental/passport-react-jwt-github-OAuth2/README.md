# Passport React JWT App

# Users who are logged into app can store images that are only viewable to them

***This app is simple, but utilizes Github as an Oauth2 provider to register user to application***
***JWT Toekens are used to authorize users to image resources***

# Do this 1st before anything else
1) npm install at the root of project
2) npm start
3) This will bring up app. Just confirm everything works using default environment variables for now.

# Peronsal App Setup

1) Register an OAuth Account with Github, (currently I am sharing my private environment variables but I will be removing soon)
   a) Login into your account and click your profile --> settings. Select 'Developer Settings'
   b) Select OAuth Apps
   c) Create new Oauth App
   You will be prompted for:
   - Application Name (not too important put anything)
   - Homepage URL (not too important put anything)
   - Application Description (not too important put anything) 
   - Authorization Callback URL, For dev purposes set it to the following:
     -  http://localhost:3001/auth
     -  (note this is a route we defined in our app)

2) Go to .env, Github will give you a client ID and secret. Replace DEV_GITHUB_CLIENT_ID and DEV_GITHUB_CLIENT_SECRET.
   - note for dev purposes leave every thing else as-is
3) Run npm install at root of file to download react and nodjs dependencies
4) Run npm start to startup app.