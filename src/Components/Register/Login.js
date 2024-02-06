import React, { useEffect } from 'react'
import './loginc.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaGoogle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import SignUp from '../images/SignUp.png';
// import './jo.js'

function Login() {
    useEffect(() => {
        const container = document.querySelector('.container');
        const sign_in_btn = document.getElementById('sign-in-btn');
        const sign_up_btn = document.getElementById('sign-up-btn');
        const sign_in_btn2 = document.getElementById('sign-in-btn2');
        const sign_up_btn2 = document.getElementById('sign-up-btn2');

        sign_up_btn.addEventListener('click', () => {
            container.classList.add('sign-up-mode');
            formik.resetForm();
        });

        sign_in_btn.addEventListener('click', () => {
            container.classList.remove('sign-up-mode');
            formik_SignUp.resetForm();
        });

        sign_up_btn2.addEventListener('click', () => {
            container.classList.add('sign-up-mode2');
        });

        sign_in_btn2.addEventListener('click', () => {
            container.classList.remove('sign-up-mode2');
        });
    }, []);

    const handleon = (e) => {
        e.preventDefault();
        console.log("ROhit on")
    }
    const formik = useFormik({
        initialValues: {
            u_email: '',
            u_pass: ''
        },
        validationSchema: Yup.object({
            u_email: Yup.string()
                .required('Please enter email')
                .email('email invalid'),
            u_pass: Yup.string()
                .required('Password is required')
                .min(8, 'At least 8 charachter is requird')
                .matches(/[A-Z]/, 'Atleast one uppercase')
                .matches(/[a-z]/, 'Atleast one lowercase')
                .matches(/[0-9]/, 'Atleast one number')
                .matches(/[^\w]/, 'Atleast one special charachter')
                .matches(/^[^\s]*$/, 'space not allowed'),
        }),
        onSubmit: (values) => {
            console.log(values);
            formik.handleReset()
        }
    })
    const formik_SignUp = useFormik({
        initialValues: {
            u_name: '',
            u_email: '',
            u_pass: ''
        },
        validationSchema: Yup.object({
            u_name: Yup.string()
                .required('username is required')
                .min(8, 'Minimum 8 charachter is requird')
                .matches(/^[A-za-z]+$/, 'Only charachter is required'),
            u_email: Yup.string()
                .required('Please enter email')
                .email('email invalid'),
            u_pass: Yup.string()
                .required('Password is required')
                .min(8, 'At least 6 charachter is requird')
                .matches(/[A-Z]/, 'Atleast one uppercase')
                .matches(/[a-z]/, 'Atleast one lowercase')
                .matches(/[0-9]/, 'Atleast one number')
                .matches(/[^\w]/, 'Atleast one special charachter')
                .matches(/^[^\s]*$/, 'space not allowed'),
        }),
        onSubmit: (values) => {
            console.log(values);
            formik_SignUp.handleReset()
        }
    })
    return (

        <div className="container" >
            <div className="signin-signup">
                <form className="sign-in-form" onSubmit={formik.handleSubmit}>
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                        <MdOutlineMail className="fas fa-user size-6 text-slate-500" />
                        {/* <i className="fas fa-user"></i> */}
                        <input type="text" placeholder="Email" name='u_email' id='u_email' value={formik.values.u_email} onChange={formik.handleChange} />
                    </div>
                    <div className='rok'>
                        <label htmlFor="username " className='fonti'>{formik.errors.u_email && formik.touched.u_email ? formik.errors.u_email : ''}</label>
                    </div>
                    <div className="input-field">
                        <FaLock className="fas fa-lock text-slate-500" />
                        {/* <i className="fas fa-lock"></i> */}
                        <input type="password" placeholder="Password" name='u_pass' id='u_pass' value={formik.values.u_pass} onChange={formik.handleChange} />
                    </div>
                    <div className='rok'>
                        <label htmlFor="username " className='fonti'>{formik.errors.u_pass && formik.touched.u_pass ? formik.errors.u_pass : ''}</label>
                    </div>
                    <button className='btn' type='submit'>Login</button>
                    {/* <input type="submit" value="Login" className="btn" onClick={handleon}/> */}
                    <p className="social-text">Or Sign in with social platform</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <TiVendorMicrosoft className="fab fa-facebook " />
                        </a>
                        <a href="" className="social-icon">
                            <FaGoogle className="fab fa-twitter" />
                        </a>
                    </div>
                    <p className="account-text">Don't have an account? <a href="#" id="sign-up-btn2">Sign up</a></p>
                </form>
                <form className="sign-up-form" onSubmit={formik_SignUp.handleSubmit}>
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <FaUserAlt className="fas fa-user" />
                        <input type="text" placeholder="Username" name='u_name' id='u_name' value={formik_SignUp.values.u_name} onChange={formik_SignUp.handleChange}/>
                    </div>
                    <div className='rok'>
                        <label htmlFor="username " className='fonti'>{formik_SignUp.errors.u_name && formik_SignUp.touched.u_name ? formik_SignUp.errors.u_name : ''}</label>
                    </div>
                    <div className="input-field">
                        <MdOutlineMail className="fas fa-lock size-6" />
                        <input type="text" placeholder="Email" name='u_email' id='u_email' value={formik_SignUp.values.u_email} onChange={formik_SignUp.handleChange}/>
                    </div>
                    <div className='rok'>
                        <label htmlFor="username " className='fonti'>{formik_SignUp.errors.u_email && formik_SignUp.touched.u_email ? formik_SignUp.errors.u_email : ''}</label>
                    </div>
                    <div className="input-field">
                        <FaLock className="fas fa-lock" />
                        <input type="password" placeholder="Password" name='u_pass' id='u_pass' value={formik_SignUp.values.u_pass} onChange={formik_SignUp.handleChange}/>
                    </div>
                    <div className='rok'>
                        <label htmlFor="username " className='fonti'>{formik_SignUp.errors.u_pass && formik_SignUp.touched.u_pass ? formik_SignUp.errors.u_pass : ''}</label>
                    </div>
                    <button className="btn" type='submit'>Sign up</button>
                    {/* <input type="submit" value="Sign up" className="btn"/> */}
                    <p className="social-text">Or Sign in with social platform</p>
                    <div className="social-media">
                        <a href="#" className="social-icon">
                            <TiVendorMicrosoft className="fab fa-facebook" />
                        </a>
                        <a href="" className="social-icon">
                            <FaGoogle className="fab fa-twitter" />
                        </a>
                    </div>
                    <p className="account-text">Already have an account? <a href="#" id="sign-in-btn2">Sign  in</a></p>
                </form>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h1 style={{ fontSize: '40px' }}>Hello, Friend!</h1>
                        <p style={{ fontSize: '18px', marginBottom: "2px" }}>Enter your details and start the journey with us</p>
                        <button className="btn" id="sign-in-btn">Sign in</button>
                    </div>
                    <img src={SignUp} alt="" className="image" />
                </div>
                <div className="panel right-panel">
                    <div className="content ">
                        <h1 style={{ fontSize: '40px' }}>Welcome Back!</h1>
                        <p style={{ fontSize: '18px', marginBottom: "2px" }}>To keep connected with us, please login with your personal info</p>
                        <button className="btn" id="sign-up-btn" >Sign up</button>
                    </div>
                    <img src={SignUp} alt="" className="image" />
                </div>
            </div>
        </div>

    )
}

export default Login