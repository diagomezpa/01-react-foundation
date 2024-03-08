import React from 'react'
import { useForm } from 'react-hook-form';

type FormInputs = {
    email: string;
    password: string;
}
export const FormsPage = () => {

  const {register} = useForm<FormInputs>({
    defaultValues:{
        email:'diagomezpa@gmail.com',
        password:'Abc123'

    }
  })

  return (
   <>
    <form>
        <h3>Formularios</h3>
        <div style={{display:'flex', flexDirection:'column'}}>
            <input type="text" placeholder='Email' {...register('email')}/>
            <input type='text' placeholder='password' {...register('password')}/>

            <button type="submit"> Ingresar</button>
        </div>
    </form>
   </>
  )
}
