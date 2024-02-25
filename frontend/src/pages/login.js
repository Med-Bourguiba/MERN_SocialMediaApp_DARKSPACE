import React, {useState} from 'react'
import Swal from 'sweetalert2'
import UserService from '../services/userService'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()

    const[email , setEmail] = useState('')
    const[password , setPassword] = useState('')
    const [errors, setErrors] = useState(
        {
            email : '',
            password : ''  
        }
    )


    const formValidation=() =>{

        let status = true;

        let localErrors = {...errors}

       
        if(email === ""){
            localErrors.email = 'Email required !'
            status = false;

        }
        if(password === "" || password.length < 8){
            localErrors.password = 'Password required and min 8 caracters !'
            status = false;

        }
       
        setErrors(localErrors)
        
        return status;
    }

    const login= async (e) =>{
        e.preventDefault();

        if(formValidation()){

            
            const data = {
               
                email : email,
                password : password,
            }
    
            try{
                const response = await UserService.signIn(data)
                console.log("response ==>" , response)

                // save les données du user on localstorage
                localStorage.setItem('user_data', JSON.stringify(response.data.user) )
                localStorage.setItem('token', response.data.token)
                

                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Connected !",
                    showConfirmButton: false,
                    timer: 1200
                  });
                  
           
                setEmail('')
                setPassword('')

                // redirection vers Home page 
                navigate("/home")
            
    
            }catch(err){
                console.log(err)
                Swal.fire({
                    title: 'Error!',
                    text: err.response.data.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
            }

        }else{
            console.log('form invalid !')
        }

        
    }



    return(
        <div className='login'>

            <div className='login-cover'>

            </div>
            <div className='login-content'>
            <div>
                    <h1>DARK SPACE</h1>
                    <p>Dark Space Social Media Application</p>
            </div>


            <div>
                    <form onSubmit={login}>
                       

                        <div className='form-group'>
                            <label>Email<span style={{ color: 'red' }}>*</span></label>
                            <input className='input' placeholder='exemple@gmail.com' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            {
                                errors.email !== "" ?
                                    <div style={{textAlign:'left' , color: 'orangered'}}>
                                        {errors.email}
                                    </div> : ''

                            }
                        </div>

                        <div className='form-group'>
                            <label>Password<span style={{ color: 'red' }}>*</span></label>
                            <input className='input' placeholder='password...' type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            {
                                errors.password !== "" ?
                                    <div style={{textAlign:'left' , color: 'orangered'}}>
                                        {errors.password}
                                    </div> : ''

                            }
                        </div>


                        <button className='btn signin' type='submit'>Sign In</button>
                    </form>
                </div>

               
        </div>
    </div>
    )
}


export default Login;