import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useNavigate } from 'react-router-dom'

const Form = ({
    isSignInPage = true,
}) => {
    const [data, setData] = useState({
        ...(!isSignInPage && {
            fullName: ''
        }),
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    return (
      <div className="bg-light h-screen flex items-center justify-center"> 
        <div className="bg-white w-[500px] h-[650px] shadow-lg rounded-lg flex flex-col justify-center items-center">
            <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
            <div className="text-xl font-light mb-14">{isSignInPage ? 'Sign in to vibe!' : 'Sign up now to get started'}</div>
            <form className="flex flex-col items-center w-full" onSubmit={() => console.log('Submitted')}>
            { !isSignInPage && <Input label="Full Name" name="name" placeholder="Enter your Full Name" className="mb-6 w-[50%]" 
            value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value})} />}
            <Input label="Email Address" type="email" name="email" placeholder="Enter your Email" className="mb-6 w-[50%]" 
            value={data.email} onChange={(e) => setData({ ...data, email: e.target.value})} />
            <Input label="Password" type="password" name="password" placeholder="Enter your Password" className="mb-14 w-[50%]" 
            value={data.password} onChange={(e) => setData({ ...data, password: e.target.value})} />
            <Button label={isSignInPage ? 'Sign In' : 'Sign Up'} type='submit' className="w-1/2"/>
            </form>
            <div>{isSignInPage ? "Did'nt have an account" : 'Already have an account?'} <span className="text-primary cursor-pointer underline" onClick={() => navigate(`/users/${isSignInPage ? 'sign_up' : 'sign_in'}`)}>{isSignInPage ? 'Sign Up' : 'Sign In'}</span></div>
        </div>
      </div>
    )
}

export default Form