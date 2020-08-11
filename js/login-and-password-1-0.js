/*
Fazer um programa que reconheça login e senha e depois validar. output: c ou login e senha errados;


login e senha

@thuamylima - thuany123
@hugolrj - hugo123
@valinetaLelio - valentina123

*/

var users = [

    {login:'@thuanylima', password:'thuany123'},
    {login:'@h', password:'h'},

]

users.forEach( (user, index)=>{

    console.log(
         user.login,
         user.password,
         index
         );

} );


var fields = document.querySelectorAll('#loginArea > [name]');

fields.forEach( (field, index) => {

  console.log(field.name) 

} );



document.querySelector('#loginArea').addEventListener( 'submit', (event)=>{

  event.preventDefault();
  alert('deu rock')

} );