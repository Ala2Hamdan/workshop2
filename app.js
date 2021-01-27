var nameUser =prompt('enter your nmae please');

document.write("<h3> welcome</h3> "+nameUser+" <h3> to clothing store</h3>");

var num =prompt('enter servie number you want that esist before the list services (1-Free Delivery...2-Return the product..3-Discount)');  
if (num == 1 ){

    alert('provide up with your iformation');
}else if ( num== 2){
    alert('you can return today ');
    var num1 =prompt('could you tell us why please ');
    alert(num1+' we will try to make you satisfied next time , thank you .');

}else if (num == 3){
 alert('you get Discount 30%' );

}else
{
    var x = confirm("try again");
}

