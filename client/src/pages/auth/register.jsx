import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";

function AuthRegister() {


    const initialState = {
        userName : '',
        email : '',
        password: ''
    }
   const [formData, setFormData]= useState(initialState)

   function onSubmit(){}
    return(

        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
                <p className="mt-2">Already have an account
                    <Link to="/auth/Login" className="font-medium hover:underline ml-2 text-cyan-500">Login</Link>
                </p>
            </div>
            <CommonForm 
            formControls={registerFormControls}
            buttonText={'Sign up'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            />
        </div>
    )
    
}
export default AuthRegister;