  body{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
    margin-top: 80px;
   
 }

button{
    font-size: 20px;
    padding: 5px 25px;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    height: 20px;
    box-shadow: 0px 4px 4px ;
 }

 button:hover{
   background-color: antiquewhite;
   transition: 1s;
 }
 .clear{
   grid-column: 2;
 }


 .container{
   display:  grid;
   grid-template-columns: repeat(3, 1fr); 
   background-color: rgb(115, 113, 113);
   height: 350px;
   width: 200px;
  
 }
 .container div {
   color: maroon;
   grid-column: 1/ span 3;
   padding: 20px;
   background-color: rgb(35, 34, 34);
 }
