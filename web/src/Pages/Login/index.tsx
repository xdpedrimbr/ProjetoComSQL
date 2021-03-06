import React, {useState, ChangeEvent, FormEvent} from 'react'
import { BrowserRouter, Link, useHistory } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';
import {useCookies} from 'react-cookie';


import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo1.png'

import api from '../../services/api'

const Login = () => {
    const history = useHistory()

    const[formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const [loginStatus, setLoginStatus, removeLoginStatus] = useCookies()

    const [estaLogado, setEstaLogado] = useState(false)

    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState<string>('')
    const [toastTitle, setToastTitle] = useState<string>('')
    const [toastClassName, setToastClassName] = useState<string>('')
    const toggleShowToast = () => setShowToast(!showToast)

    function showToastFunction(message: string, code: number){
        setShowToast(true);
        setToastMessage(message);
        if(code === 2){
            setToastTitle('Sucesso!');
            setToastClassName('bg-success text-light')
        }else{
            setToastTitle('Erro!');
            setToastClassName('bg-danger text-light');
        }
    }
    
    async function handleSubmit(event: FormEvent){
        event.preventDefault()

        const {email, password} = formData

            await api.post('login', {email: email, password: password})
            .then(function(response){
                console.log(response)
                if(response.data.loginOK){
                    showToastFunction('Login realizado', 2)
                    setTimeout(() => {
                        history.push('/home2')
                    }, 2500)
                    setLoginStatus("loginStatus", true)
                    setEstaLogado(true)
                }else{
                    showToastFunction(response.data.erro, 1)
                    setEstaLogado(false)
                }
            })
    }



    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target

        setFormData({...formData, [name]: value})
    }
    
    
    return( 
            <>
                <Toast show={showToast} onClose={toggleShowToast} delay={5000} autohide style={{position: 'fixed', bottom: 0, right: 0, zIndex: 999, maxWidth: '200px'}}>
                <Toast.Header className={toastClassName} >
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">{toastTitle}</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>

            <div className="col-sm-4 bg-light text-center offset-sm-4 mt-5 rounded pt-3 pb-3">  
                {/* coloca a logo em cima dos campos de login */}
                <div className="row justify-content-center mt-5 mb-5">
                        <img src={logo} style={{width:'25%', height: '25%',  minWidth: '80px', minHeight: '50px'}} alt="logo"/>
                </div>
            
                <div className="row justify-content-center mt-2 mb-5">
                    <form className="text-center" onSubmit={handleSubmit}>
                        
                        <div className="form-group pr-5 pl-5">
                            <div className="camposlog">
                                <label className="text-danger" htmlFor="email">Digite seu Email: </label>
                                    <input className="form-control"
                                        type="text"
                                        name="email"
                                        id="email"
                                        onChange={handleInputChange}
                                        required
                                    />
                            </div>
                        </div>
                    
                        
                    <div className="form-group pr-5 pl-5">
                        <div className="camposlog">
                            <label className="text-danger" htmlFor="password">Digite sua senha: </label>
                                <input className="form-control"
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={handleInputChange}
                                    required
                                />
                        </div>
                    </div>
                    

                    <button type="submit" className="btn btn-danger">
                        Enviar
                    </button>

                    <div className="form-group form-check mt-4">

                </div>


                </form>

                

            </div>
    </div>
    </>


    )
}

export default Login
