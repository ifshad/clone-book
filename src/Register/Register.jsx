

const Register = () => {
    const handleSignUp = e => {
        e.preventDefault();
        const userEmail = e.target.email.value;
        const userPass = e.target.password.value;
        console.log(userEmail, userPass)
    }
    

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <input type="email" name="email" id="email" />
                        <input type="password" name="password" id="password" />
                        <input type="submit" value="Sign Up" className="btn btn-secondary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;