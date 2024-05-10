import React from 'react';

const Process = () => {
  return (
    <div className="w-full text-black " style={{ backgroundImage: `url('/Slogo.PNG')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <h2 className="text-3xl px-40 text-gray-500 font-semibold mb-3" >Donation Process</h2>
      <div className="flex flex-col">
        <div className=" w-[40%] border text-black border-gray-300 rounded-lg p-4" style={{ backgroundImage: `url('/')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="services1">
            <br />
            <div className="text1">
              <h4 className='text-2xl font-semibold'>1.Registration</h4>
              <p>
                Someone who needs to donate blood is facilitated to be linked to nearby hospital.
              </p>
              <button className="">
                <a href="/" className="p-2 rounded-2xl">Click Here</a>
              </button>
            </div>
          </div>
        </div>
        <div className="ml-[43%] w-[40%] border border-gray-300 rounded-lg p-4 " style={{ backgroundImage: `url('')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="services2">
            <br />
            <div className="text2">
              <h4 className='text-2xl font-semibold'>2. Book,request for donating immediately, or Blood requesting</h4>
              <p>
                You can simply book blood donation time according to your availability.
              </p>
              <button className="px-3 w-full">
                <a href="" className="p-2 rounded-2xl">Click Here</a>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[40%] border border-gray-300 rounded-lg p-4 " style={{ backgroundImage: `url('/')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="services3">
            <br />
            <div className="text3">
              <h4 className='text-2xl font-semibold'>3. Linking blood donors and blood seekers </h4>
              <p>
                Health institutions in need of blood can be linked with blood donors.
              </p>
              <button className="">
                <a href="/" className="p-2 rounded-2xl">
                  Click Here
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="ml-[43%] w-[40%] border border-gray-300 rounded-lg p-4" style={{ backgroundImage: `url('')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="services2">
            <br />
            <div className="text2">
              <h4 className='text-2xl font-semibold'>4. Donating or get blood</h4>
              <p>
                You can simply book blood donation time according to your availability.
              </p>
              <button className="px-3 w-full">
                <a href="" className="p-2 rounded-2xl">Click Here</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
