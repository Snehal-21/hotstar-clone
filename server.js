function register(event){
    event.preventDefault();
    // console.log("register button clicked");

    var name=document.getElementById("hname").value;
    var email=document.getElementById("hemail").value;
    var password=document.getElementById("hpassword").value;
    var confirmpassword=document.getElementById("hconfirmpassword").value;

    // var hotstarusers={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
    // console.log(hotstarusers);
    if(name && email && password && confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            if(password==confirmpassword){
                var harray=JSON.parse(localStorage.getItem("hotstarusers")) || [];
                // var hotstaruserarray=[];
                var flagforemail=false;
                for(var i=0;i<harray.length;i++){
                    if(harray[i].uemail == email){
                        flagforemail=true;
                    }
                }
                if(flagforemail=false){
                    alert("email already exist");
                }
                else{
                    var hotstar={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
                    harray.push(hotstar);
                    // console.log(harray)
                    localStorage.setItem("hotstarusers",JSON.stringify(harray))
                    alert("Registered Successfully")
                    document.getElementById("hname").value=''
                    document.getElementById("hemail").value=''
                    document.getElementById("hpassword").value=''
                    document.getElementById("hconfirmpassword").value=''
                    window.location.href="./login.html"
                }
            }
            else{
                console.log("Password not matched.")
            }

        }else{
            console.log("Password should be minimum 8 digits.");
        }

    }
    else{
        console.log("all fields are required.")
    }
}

function login(event){
    event.preventDefault();

     var lemail=document.getElementById("hlemail").value;
     var lpassword=document.getElementById("hlpassword").value;
     var loginuser={}
    //  console.log(lemail,lpassword)
    if(lemail && lpassword){
        var hlarray=JSON.parse(localStorage.getItem("hotstarusers"))
        var flagforlogin=false;
        console.log(hlarray)
        for(var i=0;i<hlarray.length;i++){
            if(hlarray[i].uemail==lemail && hlarray[i].upassword==lpassword){
                flagforlogin=true;
                loginuser=hlarray[i];
            }
        }
        if(flagforlogin==true){
            localStorage.setItem("hloginuser",JSON.stringify(loginuser));
            alert("logged in Successfully")
            window.location.href="./home.html";
            document.getElementById("hlemail").value=''
            document.getElementById("hlpassword").value=''
        }
        else{
            alert("credentials not matched.")
            
        }

    }
    else{
        console.log("both fields are required.")
    }

}