# crudmern

npx create-react-app .
npm install web-vitals


https://www.youtube.com/watch?v=hmwFN5YzY1s
12:00 mongodb 



### you will gett error like this below if you have not used 
### body-parser or express.json
## request.body hai name koo read nahii kar parah
## app.use(express.json())
## abb joo dataa aaraa hai backed mein convert hoo jayegaa JSON mein in backend
  const{name,email,age}=req.body
              ^

TypeError: Cannot destructure property 'name' of 'req.body' as it is undefined.
    at C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\server.js:26:15
    at Layer.handle [as handle_request] (C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\router\index.js:284:15
    at Function.process_params (C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\router\index.js:346:12)   
    at next (C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\router\index.js:280:10)
    at expressInit (C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\middleware\init.js:40:5)
    at Layer.handle [as handle_request] (C:\Users\Manoranjan\Desktop\Back-End Projects\ReactJs\crudmern\crudmern\backend\node_modules\express\lib\router\layer.js:95:5)

Node.js v20.16.0




url see id bahar niklnee kee liyee req.params 
aur joo input field see bahar niklanee kee liyee use kartee hai req.body