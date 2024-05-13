

const SignUp = () => {
    
    
    return (
    
    <div className="w-full">           
    <h1 className="text-2xl text-white font-bold">SIGN UP</h1>
    <div className="mt-5 flex flex-col gap-5">
      <div className="">
      <input
          type="text"
          id="names"
          placeholder="Full names"
          value=''
          className="  px-3 py-2 rounded-md w-[80%] border border-red-700"
        />
      </div>  
      <div>
        <input
          type="text"
          id="username"
          placeholder="Email"
          required
          className=" px-3 py-2 rounded-md w-[80%] border border-red-700"
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          placeholder="password"
          value=''
          className=" px-3 py-2 rounded-md border border-red-700 w-[80%]"
        />
      </div>
      <div>
        <input
          type="password"
          id="confirm password"
          placeholder="Confirm password"
          value=''
          className=" px-3 py-2 rounded-md border border-red-700 w-[80%]"
        />
      </div>
        <button className="ml-[10%] bg-red-700 mx-9 py-2 rounded-md text-white w-[80%] border ">Sign Up</button>
      </div>
    </div>
    
            )}
    
export default SignUp