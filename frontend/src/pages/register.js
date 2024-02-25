import React, { useState } from 'react'
import Swal from 'sweetalert2'
import UserService from '../services/userService'

const Register = () => {

    const[firstname , setFirstname] = useState('')
    const[lastname , setLastname] = useState('')
    const[email , setEmail] = useState('')
    const[password , setPassword] = useState('')
    const[bio , setBio] = useState('')
    const[picture , setPicture] = useState('')
    const[birthdate , setBirthdate] = useState('')

    const [errors, setErrors] = useState(
        {
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            bio : '',
            birthdate : '',
        }
    )

    const formValidation=() =>{

        let status = true;

        let localErrors = {...errors}

        if(firstname === ""){
            localErrors.firstname = 'Firstname required !'
            status = false;

        }
        if(lastname === ""){
            localErrors.lastname = 'Lastname required !'
            status = false;

        }
        if(email === ""){
            localErrors.email = 'Email required !'
            status = false;

        }
        if(password === "" || password.length < 8){
            localErrors.password = 'Password required and min 8 caracters !'
            status = false;

        }
        if(bio === "" || bio.length < 3){
            localErrors.bio = 'Bio required and min 3 caracters !'
            status = false;

        }

        setErrors(localErrors)
        console.log(localErrors)
        return status;
    }



    const register= async (e) =>{
        e.preventDefault();

        if(formValidation()){

            
            const data = {
                firstname : firstname,
                lastname : lastname,
                email : email,
                password : password,
                bio : bio,
                birthdate : birthdate,
                picture : picture
            }
    
            try{
                const response = await UserService.register(data)
                console.log("response ==>" , response)
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Account created successfully !",
                    showConfirmButton: false,
                    timer: 2000
                  });
                  
                
    
                setFirstname('')
                setLastname('')
                setEmail('')
                setPassword('')
                setBio('')
                setBirthdate('')
    
            }catch(err){
                console.log(err)
                Swal.fire({
                    title: 'Error!',
                    text: 'Somthing went wrong :(',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  })
            }

        }else{
            console.log('form invalid !')
        }

        
    }


    return(
        <div className='register'>
            <div className='register-cover'>
                

            </div> 

            <div className='register-content'>
        
                <div>
                    <h1>DARK SPACE</h1>
                    <p>Dark Space Social Media Application</p>
                </div>

                <div>
                    <form onSubmit={register}>
                        <div className='form-group'>
                            <label>Firstname<span style={{ color: 'red' }}>*</span></label>
                            <input className='input' placeholder='your firstname' type="text" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                            {
                                errors.firstname !== "" ?
                                    <div style={{textAlign:'left' , color: 'orangered'}}>
                                        {errors.firstname}
                                    </div> : ''

                            }

                        </div>

                        <div className='form-group'>
                            <label>Lastname<span style={{ color: 'red' }}>*</span></label>
                            <input className='input' placeholder='your lastname' type="text" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                            {
                                errors.lastname !== "" ?
                                    <div style={{textAlign:'left' , color: 'orangered'}}>
                                        {errors.lastname}
                                    </div> : ''

                            }
                        </div>

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

                        <div className='form-group'>
                            <label>Bio<span style={{ color: 'red' }}>*</span></label>
                            <textarea placeholder='Hi ! it s Meee ;) ..' value={bio} onChange={(e)=>setBio(e.target.value)}></textarea>
                            {
                                errors.bio !== "" ?
                                    <div style={{textAlign:'left' , color: 'orangered'}}>
                                        {errors.bio}
                                    </div> : ''

                            }
                        </div>


                        <div className='form-group'>
                            <label>Birthdate</label>
                            <input className='input' type="date" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)}/>
                        </div>

                        <button className='btn signup' type='submit'>Sign up</button>
                    </form>
                </div>
                
            </div> 

        </div>
    )
}

export default Register;