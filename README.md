# Live-Code-Collab
>RealTime Code collaboration platform 

**Live Here :**  [https://livecodecollab.herokuapp.com/](https://livecodecollab.herokuapp.com/)

Collab with your friends, colleagues and code together in realtime!. 

You can use it to `conduct interviews`, help your friend by `debuging code together`, `explaining the working of code practically` and much more. Basically it makes learning programming together much easy and fun!.

For implementing the concurrent edits and realtime colaboration I have used `Operational Transformations` and `socket.io` for chatting and syncing the code file. 

.

![](result2.gif)

For any `suggesstions` , `issues` and `collaborations` write to me at [pawan.kholiya01@gmail.com](mailto:pawan.kholiya01@gmail.com) . I will be more than happy to hear from you.
## Features :
  - User **Registration** and **Authentication.**
  - Create **Collabs** and code in realtime with anyone.


## Upcomming Features :
  - BuildIn Judge to test your code on inputs. 
  - Access all the collabs you ever created!(For Registered Users). 
  


## Specifications Features :

  - **BackEnd  :** Express js is used to create the backend, and `passport-local` for user-authenticaltion.
  - **Database :** Used `mongoose` for modelling **mongo DB** and has used `mongoDB Cloud Atlas` for storage of user data and the collabs created.
  - **Operational Transformations :** is an algorithmic technique for realtime collaborative editing of simpler to complex documents. [Read more here!](http://operational-transformation.github.io/) . Library for Operational Transformations [ot.js](https://github.com/Operational-Transformation/ot.js/).
  
 ## To Replicatate :
 
  - Download the project as zip;
  - Navigate to `app.js` and change:
    - `const sessionKey` to a random string as per-your choice;
    - `const dbConnstring` to your cluster connection url which you can get by creating cluster on Atlas, Alternatively you can also use mongoDB local.
  - Install all dependencies by
    ``` npm install ```
  - Start the Server by
    ``` npm start ```
    
  
