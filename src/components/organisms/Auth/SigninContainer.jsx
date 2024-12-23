import { useNavigate } from "react-router-dom";
import { SigninCard } from "./SigninCard";
import { useState, useEffect} from "react";
import { useSignin } from "@/hooks/apis/auth/useSignin";

export const SigninContainer =() => {

    const navigate = useNavigate();

    const [validationError, setValidationError] = useState(null);

     const [signinForm, setSigninForm] = useState({
            email: '',
            password:''
           
       });

       const {isSuccess, isPending, error, signinMutation} = useSignin();

       const onSigninFormSubmit = async (e) => {
            e.preventDefault();

            if(!signinForm.email || !signinForm.password){
                console.log('Please fill all the fields');
                setValidationError({message:'Please fill all the fields'})
                // toast({

                // })
                return;
            }

            setValidationError(null);

            await signinMutation({
                email: signinForm.email,
                password: signinForm.password,
            })
       }

         useEffect(() => {
               if(isSuccess){
                   setTimeout(()=> {
                       navigate('/home');
                   },3000)
               }
            }, [isSuccess, isPending]);
       return(
        <SigninCard
            onSigninFormSubmit={onSigninFormSubmit}
            signinForm={signinForm}
            setSigninForm={setSigninForm}
            validationError={validationError}
            isSuccess={isSuccess}
            isPending={isPending}
            error={error}
        />
       )

}
