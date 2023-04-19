import { useState } from 'react';

function Signin() {
    const [Email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const handleId = (e) => {
        setEmail(e.target.value)
    }
    const handlePw = (e) => {
        setPw(e.target.value)
    }

    const loginSub = (e) => {
        e.preventDefault()
        // axios
    }

    return (
        <div>
            <h1>Signin</h1>
            <form method='POST'>
                <label htmlFor='Email'>Email</label>
                <input id='Email' 
                    type='email' 
                    value={Email} 
                    placeholder='Email'
                    onChange={handleId} 
                    required 
                />
                <label htmlFor='pw'>PW</label>
                <input id='pw' 
                    type='password' 
                    value={pw} 
                    placeholder='Password'
                    onChange={handlePw} 
                    required 
                />
                <input type='submit' value='Login' onClick={loginSub} />
            </form>
        </div>
    )
}

export default Signin;