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

document.querySelectorAll('#loginArea > [name]').forEach( ( field, index )=>{

  console.log(field.name, index)

});

users.forEach( (user, index)=>{

    console.log(
         user.login,
         user.password,
         index
         );

} );