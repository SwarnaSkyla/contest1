import React,{useState} from "react";

const Form=()=>{

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");

    const[errorName,setErrorName]=useState("");
    const[errorEmail,setErrorEmail]=useState("");
    const[errorPassword,setErrorPassword]=useState("");
    const[errorConfirmPassword,setErrorConfirmPassword]=useState("");


    const[successMessage,setSuccessMessage]=useState("");


    const[formValues,setFormValues]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });


    const formSubmit=(event)=>{
         event.preventDefault();

         if(name.trim() === ""){
            setErrorName("Error:All fields are mandatory");
            setSuccessMessage("");
            return;
         }

         if(!name.includes("")){
            setErrorName("Error:Please Enter your name");
            setSuccessMessage("");
            return;
         }
         if(email.trim() === ""){
            setErrorEmail("Error:Email is required");
            setSuccessMessage("");
            return;
         }
         if(!isValidEmail(email.trim())){
            setErrorEmail("Please Enter an email");
            setSuccessMessage("");
            return;
         }
         if(password.trim()===""){
            setErrorPassword("password is required");
            setSuccessMessage("");
            return;
         }
         if(password.length<6){
            setErrorPassword("Enter atleast six characters");
            setSuccessMessage("");
            return;
         }
         if(confirmPassword.trim()===""){
            setErrorConfirmPassword(" confirm password is required");
            setSuccessMessage("");
            return;
         }
         if(confirmPassword!==password){
            setErrorConfirmPassword("password and confirmpassword do not match");
            setSuccessMessage("");
            return;
         }

         setErrorName("");
         setErrorEmail("");
         setErrorPassword("");
         setErrorConfirmPassword("");
         setSuccessMessage("SignedUp successfully!");

    }

    function isValidEmail(email){
        const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }


    const clearError=(formValues)=>{
        switch(formValues){
            case "name":
                setErrorName("");
                break;
            case "email":
                setErrorEmail("");
                break;
            case "password":
                setErrorPassword("");
                break;
            case "confirmPassword":
                setErrorConfirmPassword("");
                break;
            
            default:
                 break;
        }
    };

    return(
        <div>
            <form>
                <h1>SignUp</h1>
                <input type="text" placeholder="Full Name" value={name} onChange={(event)=>{
                    setName(event.target.value);
                    clearError("name");
                }}/><br/>
                <input type="email" placeholder="Email" value={email} onChange={(event)=>{
                    setEmail(event.target.value);
                    clearError("email");
                }}/><br/>
                <input type="password" placeholder="Password" value={password} onChange={(event)=>{
                    setPassword(event.target.value);
                    clearError("password");
                }}/><br/>
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(event)=>{
                    setConfirmPassword(event.target.value);
                    clearError("confirmPassword");
                }}/>{" "}
                <br/>
                <p>
                    {" "}
                    {errorName && <p className="error">{errorName}</p>}{" "}
                    {errorEmail && <p className="error">{errorEmail}</p>}{" "}
                    {errorPassword && <p className="error">{errorPassword}</p>}{" "}
                    {errorConfirmPassword && <p className="error">{errorConfirmPassword}</p>}{" "}
                    {successMessage && <p className="success">{successMessage}</p>}{" "}

                </p>
                <button type="submit" onClick={formSubmit}>
                    SignUp
                </button>
            </form>
        </div>
    );
};

export default Form;