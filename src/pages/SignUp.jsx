

const SignUp = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const signUpData = {
      fullName: fullName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await axios.post(
        "https://blood-link-be.onrender.com/api/user/signup",
        signUpData
      );
      setSuccessMessage("You have registered successfully!");
      setErrorMessage("");
      console.log(response.data); 
    } catch (error) {
      setErrorMessage("An error occurred while registering");
      setSuccessMessage("");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  const isSignUpDisabled = () => {
    return Object.values(formData).some((val) => val === "" || val === false);
  };
    
    
    return (
    
    <div className="w-full">           
    <h1 className="text-2xl text-gray-700">Register your Account</h1>
    <div className="mt-5 flex flex-col gap-5">
      <div className="">
      <input
          type="text"
          id="names"
          placeholder="Full names"
          value=''
          className="  px-3 py-2  bg-slate-300 rounded-md w-[80%] border "
        />
      </div>  
      <div>
        <input
          type="text"
          id="username"
          placeholder="Email"
          required
          className=" px-3 py-2 bg-slate-300 rounded-md w-[80%] border "
        />
      </div>
      <div className="">
        <input
          type="password"
          id="password"
          placeholder="password"
          value=''
          className=" px-3 py-2 bg-gray-300 rounded-md border  w-[80%]"
        />
      </div>
      <div>
        <input
          type="password"
          id="confirm password"
          placeholder="Confirm password"
          value=''
          className=" px-3 py-2  bg-slate-300 rounded-md border w-[80%]"
        />
      </div>
        <button className="ml-[10%]  mx-9 py-2 bg-red-600 rounded-md text-white w-[80%] border ">Sign Up</button>
      </div>
    </div>
    
            )}
    
export default SignUp