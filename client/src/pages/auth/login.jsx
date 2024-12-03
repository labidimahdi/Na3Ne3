import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useToast } from "@/hooks/use-toast";
import { loginUser } from "@/store/auth-slice";



function AuthLogin() {
    const initialState = {
        email : '',
        password: ''
    }
   const [formData, setFormData]= useState(initialState);
   const dispatch = useDispatch();
  const { toast } = useToast();

   function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }
    return(

        <div className="mx-auto w-full max-w-md space-y-6">
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in to your account</h1>
                <p className="mt-2">Don`t have an account
                    <Link to="/auth/register" className="font-medium hover:underline ml-2 text-cyan-500">Register</Link>
                </p>
            </div>
            <CommonForm 
            formControls={loginFormControls}
            buttonText={'Sign in'}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
            />
        </div>
    )
}
export default AuthLogin;