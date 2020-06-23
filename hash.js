const bcrypt= require('bcrypt');
const {MD5}= require('crypto-js');
const jwt= require('jsonwebtoken');


// bcrypt.genSalt(10,(err,salt)=>{
// 	if(err) return next(err);

// 	bcrypt.hash('password123',salt,(err,hash)=>{
//     if(err) return next(err);
//      console.log(hash);

// 	})
// });

// const secret='mysecretpassword';
// const secretSalt='fdfdfdf';

// const user={
// 	id:1,
// 	token:MD5('fdfdfdfdfd').toString() + secretSalt 
// }

 
// const recieveToken='cd9ba013256142319f2b064e7d00263afdfdfdf';
// if(recieveToken===user.token){
// 	console.log('Move farword');
// }
// console.log(user);

const id='1000';
const secret ='supersecret';

const recieveToken='eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y';

const token=jwt.sign(id,secret);//encoding
const decodeToken =jwt.verify(recieveToken,secret);//decoding

console.log(decodeToken);
