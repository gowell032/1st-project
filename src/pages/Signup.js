function Signup() {
    return (
        <div>
            <form method='POST'>
                <label htmlFor='id'>ID</label>
                <input id='id' type='text'></input>
                <label htmlFor='pw'>PW</label>
                <input id='pw' type='password'></input>
                <label htmlFor='id'>PW confirmation</label>
                <input id='id' type='text'></input>
                <input type='submit' value='Signup'></input>
            </form>
        </div>
    )
}

export default Signup;