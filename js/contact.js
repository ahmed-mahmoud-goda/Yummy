let regex = [/^[a-zA-Z ]+$/,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/];
let name = false;
let email = false;
let phone = false;
let age = false;
let password = false;
let repassword = false;
class Contact{
    showContact(){
        document.getElementById("inputs").classList.add("d-none");
        let contact = document.getElementById("meals");
        contact.innerHTML =  `
        <div class="contact position-absolute min-vh-100 d-flex justify-content-center align-items-center">
                <div class="container w-75 text-center">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Your Name" id="name">
                            <div id="nameError" class="alert alert-danger w-100 mt-2 d-none">
                                Special characters and numbers not allowed
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Your Email" id="email">
                            <div id="emailError" class="alert alert-danger w-100 mt-2 d-none">
                                Email not valid *exemple@yyy.zzz
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Your Phone" id="phone">
                            <div id="phoneError" class="alert alert-danger w-100 mt-2 d-none">
                                Enter valid Phone Number
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Enter Your Age" id="age">
                            <div id="ageError" class="alert alert-danger w-100 mt-2 d-none">
                                Enter valid age
                            </div>
                        </div>
                        <div class="col-md-6">
                            <input type="password" class="form-control" placeholder="Enter Your Password" id="password">
                            <div id="passwordError" class="alert alert-danger w-100 mt-2 d-none">
                                Enter valid password *Minimum eight characters, at least one letter and one number:*
                             </div>
                        </div>
                        <div class="col-md-6">
                            <input type="password" class="form-control" placeholder="Repassword" id="repassword">
                            <div id="repasswordError" class="alert alert-danger w-100 mt-2 d-none">
                                Enter valid repassword 
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-outline-danger disabled px-2 mt-3" id="Submit">Submit</button>
                </div>
            </div>
        `

        document.getElementById("name").addEventListener("input",function(){
            if(regex[0].test(this.value) == true){
                name = true;
                document.getElementById("nameError").classList.add("d-none");
            }
            else{
                name = false;
                document.getElementById("nameError").classList.remove("d-none");
            }
            if((name && email && password && repassword && age && phone)==true){
                document.getElementById("Submit").classList.remove("disabled");
            }
            else{
                document.getElementById("Submit").classList.add("disabled");
            }
        })
        document.getElementById("email").addEventListener("input",function(){
            if(regex[1].test(this.value) == true){
                email = true;
                document.getElementById("emailError").classList.add("d-none");
            }
            else{
                email = false;
                document.getElementById("emailError").classList.remove("d-none");
            }
            if((name && email && password && repassword && age && phone)==true){
                document.getElementById("Submit").classList.remove("disabled");
            }
            else{
                document.getElementById("Submit").classList.add("disabled");
            }
        })
        document.getElementById("phone").addEventListener("input",function(){
            if(regex[2].test(this.value) == true){
                phone = true;
                document.getElementById("phoneError").classList.add("d-none");
            }
            else{
                phone = false;
                document.getElementById("phoneError").classList.remove("d-none");
            }
            if((name && email && password && repassword && age && phone)==true){
                document.getElementById("Submit").classList.remove("disabled");
            }
            else{
                document.getElementById("Submit").classList.add("disabled");
            }
        })
        document.getElementById("age").addEventListener("input",function(){
            if(regex[3].test(this.value) == true){
                age = true;
                document.getElementById("ageError").classList.add("d-none");
            }
            else{
                age = false;
                document.getElementById("ageError").classList.remove("d-none");
            }
            if((name && email && password && repassword && age && phone)==true){
                document.getElementById("Submit").classList.remove("disabled");
            }
            else{
                document.getElementById("Submit").classList.add("disabled");
            }
        })
        document.getElementById("password").addEventListener("input",function(){
            if(regex[4].test(this.value) == true){
                password = true;
                document.getElementById("passwordError").classList.add("d-none");
            }
            else{
                password = false;
                document.getElementById("passwordError").classList.remove("d-none");
            }
            if((name && email && password && repassword && age && phone)==true){
                document.getElementById("Submit").classList.remove("disabled");
            }
            else{
                document.getElementById("Submit").classList.add("disabled");
            }
        })
        document.getElementById("repassword").addEventListener("input",function(){
            if(this.value == document.getElementById("password").value){
                repassword = true;
                document.getElementById("repasswordError").classList.add("d-none");
            }
            else{
                repassword = false;
                document.getElementById("repasswordError").classList.remove("d-none");
            }
            if((name && email && password && repassword && age && phone)==true){
                document.getElementById("Submit").classList.remove("disabled");
            }
            else{
                document.getElementById("Submit").classList.add("disabled");
            }
        })
    }
    
}

export default Contact;