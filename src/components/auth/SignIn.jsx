const SignIn = () => {
  return (
    <div className="h-full lg:h-[90vh] 2xl:h-[89vh] py-10 md:py-12 lg:py-0 px-5 md:px-13 lg:px-25 2xl:px-40 flex items-center justify-center banner">
      <div className="">
        <h4>User Login</h4>
        <div>
          <div className=""></div>
          <form className="">
            {/* Email Input */}
            <div className="">
              <input type="text" placeholder="Email ID" />
            </div>
            {/* Password Input */}
            <div className="">
              <input type="password" placeholder="Password" />
            </div>
            {/* Remember me and Forgot Password */}
            <div>
              <div>
                <input type="checkbox" />
                <label>Remember me</label>z
              </div>
              <div>
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            </div>
            {/* Sign In Button */}
            <div>
              <button type="submit">Sign In</button>
            </div>
            {/* Sign Up Link */}
            <div>
              <p>
                Don't have an account? <a href="/register">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
