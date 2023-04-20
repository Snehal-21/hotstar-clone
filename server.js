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
        if(password>=8 && confirmpassword>=8){
            if(password==confirmpassword){
                var hotstaruserarray=JSON.parse(localStorage.getItem("hotstarusers")) || [];
                // var hotstaruserarray=[];
                var flagforemail=false;
                for(var i=0;i<=hotstaruserarray.length;i++){
                    console.log(hotstaruserarray.length);
                    console.log(hotstaruserarray[i],"single user")
                    console.log(hotstaruserarray,"areray");
                    // console.log(hotstarusersdata,"object")
                    if(hotstaruserarray[i].uemail == email){
                        console.log(hotstaruserarray[i].uemail);
                        console.log(email);
                        flagforemail=true;
                    }
                }
                if(flagforemail==true){
                    alert("email already exist");
                }
                else{
                    var hotstarusersdata={uname:name,uemail:email,upassword:password,uconfirmpassword:confirmpassword};
                    hotstaruserarray.push(hotstarusersdata);
                    console.log(hotstaruserarray)
                    localStorage.setItem("hotstarusers",JSON.stringify(hotstaruserarray))
                    alert("Registered Successfully")
                    document.getElementById("hname").value=''
                    document.getElementById("hemail").value=''
                    document.getElementById("hpassword").value=''
                    document.getElementById("hconfirmpassword").value=''
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