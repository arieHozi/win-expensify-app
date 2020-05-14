import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDExVjiMhXGHVxDcjOQcXyfwEM88596Mbw",
    authDomain: "expensify-92078.firebaseapp.com",
    databaseURL: "https://expensify-92078.firebaseio.com",
    projectId: "expensify-92078",
    storageBucket: "expensify-92078.appspot.com",
    messagingSenderId: "833703524280",
    appId: "1:833703524280:web:d0b56a019dc6fb49e0414d"
  };

  firebase.initializeApp(firebaseConfig);
   const database = firebase.database();

   database.ref().set({name : 'arie hozias'});
//   const firebaseNots = {
//     notes:{
//         id34:{
//             title:'First note',
//             body:'This is my body 1'
//         },
//         dfdfd12:{
//             title:'Second note',
//             body:'This is my body 2'
//         },
//         rrerewr:{
//             title:'Third note', 
//             body:'This is my body 3'
//         }
//     }
//   };

   // const expenses = [{
   //  description:'water',
   //  note:'pay water bill',
   //  amount:'120',
   //  createdAt:'234567'
   // },{
   //  description:'gas',
   //  note:'pay gas bill',
   //  amount:'158',
   //  createdAt:'5345435'
   // },{
   //  description:'food',
   //  note:'pay food bill',
   //  amount:'540',
   //  createdAt:'234543543'
   // }]


   //  database.ref('expenses').push({ 
   //  description:'water',
   //  note:'pay water bill',
   // amount:'120',
   //  createdAt:'234567'})

 //  database.ref('nots').push({title:'second note', 
  // body:'This is my body 3'}) 
//   database.ref().set({
//       name:"arie hozias",
//       age:26, 
//       stressLevel : 6,
//       job : {
//           Title : 'softawre developer',
//           company : 'google' 
//       },
//       isSIngle:false,
//       location : {
//           city : "Tel Aviv",
//           country : "Israel"
//       }
     
//   }).then(()=>{
//       console.log("data has changed")
//   }).catch((e)=>{
//       console.log("error",e)
//   })
/////////remove//////////////////////////////////
//  database.ref("isSIngle").remove()
//                .then(()=>{console.log('removed seccefully')})
//                .catch((e)=>{
//                    console.log('remove failed' , e)
//                })
/////update and add new ///////////////////////////////////////
// database.ref().update({stressLevel:9,'job/company':"amazon" ,'location/city':"beer-sheva" })
//                 .then(()=>{
//                     console.log('update seccesfully')
//                 }).catch((e)=>{console.log('update failed', e)})
////fatch data/////////////////////////////////////////
//once - will read once //on- will suscribe evry time that the data was change
//off- un-subscribed to the changes
// database.ref('location/city').once('value')
//                 .then((snapshot)=>{console.log('result', snapshot.val())})
//                 .catch((e)=>{console.log('error fatching data'), e})

// const onsuscribe = database.ref().on('value', (snapshot)=>
// {
//     console.log('read change' ,snapshot.val())
// })



// setTimeout(()=>{
//     database.ref().off(onsuscribe)
// },10000)