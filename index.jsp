<!DOCTYPE html>   
<html>   
<head>  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<title> Login Page </title>  
<style>   
Body {  
  font-family: Calibri, Helvetica, sans-serif;  
  background-color: rgb(202, 246, 231);  
}  
button {   
       background-color: #4CAF50;   
       width: 100%;  
        color: orange;   
        padding: 15px;   
        margin: 10px 0px;   
        border: none;   
        cursor: pointer;  
         }   
 form {   
        border: 3px solid #f1f1f1;   
    }   
 input[type=text], input[type=password] {   
        width: 100%;   
        margin: 8px 0;  
        padding: 12px 20px;   
        display: inline-block;   
        border: 2px solid green;   
        box-sizing: border-box;   
    }  
 button:hover {   
        opacity: 0.7;   
    }   
  .cancelbtn {   
        width: auto;   
        padding: 10px 18px;  
        margin: 10px 5px;  
    }   
        
    .hidden{
        display:none;
    } 
    .welcom{
        
        position:absolute;
      color:rgb(6, 100, 69);
      top:50vh;
      left:50vw;
      
    
    }

 .container {   
        padding: 25px;   
        background-color: lightblue;  
    }   
</style>   
</head>    
<body>
    
    <form class="login-form ">  
        <div class="container">   
            <label>Username : </label>   
            <input id="userName" type="text" placeholder="Enter Username" name="username" required>
            <p class="userNameMarkUp"></p>  
            <label>Password : </label>   
            <input id="password" type="password" placeholder="Enter Password" name="password" required>  
            <p  class="passMarkUp"></p>  
            <button type="submit" class="loginBtn">Login</button>   
            <input id="checkBox" type="checkbox" checked="checked"> Remember me 
            <button id="cancelButton" type="button" class="cancelbtn"> Cancel</button>   
            Forgot <a href="#"> password? </a>   
        </div>
    </form>
    <h1 class="welcom hidden">welcome!!!</h1>
 
    <script src="index.js"></script>   
</body>     
</html>  
