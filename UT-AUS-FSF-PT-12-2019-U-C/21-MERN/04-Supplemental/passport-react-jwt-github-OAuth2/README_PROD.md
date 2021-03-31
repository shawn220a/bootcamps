# Production Special Configuration

1) Be sure to setup MongoDB lab with your heroku application
2) When deploying to heroku you'll need the following environment variables:
   
   https://passport-react-jwt-app.herokuapp.com is the name of my app url, feel free to replace that with your heroku url app.
   Be sure to not replace the endpoints like, /auth and /login

   a) CALLBACK_URL : https://passport-react-jwt-app.herokuapp.com/auth

   b) GITHUB_CLIENT_ID : <PROD_GITHUB_CLIENT_ID>

   c) GITHUB_CLIENT_SECRET : <PROD_GITHUB_CLIENT_SECRET>

   d) JWT_SECRET : your_jwt_secret

   e) REACT_APP_PROD_URL : https://passport-react-jwt-app.herokuapp.com

   f) REACT_APP_PROD_URL_LOGIN : https://passport-react-jwt-app.herokuapp.com/login
   
   g) MONGODB_URI : HEROKU_WILL_SET_FOR_YOU_JUST_CONFIRM_YOU_HAVE