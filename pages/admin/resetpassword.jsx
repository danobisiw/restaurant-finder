import React from 'react'

const resetpassword = () => {
  return (
    <div className="flex  min-h-[calc(100vh-68px)] justify-center items-center flex-col ">
      <h3 className="bg-gray-100 w-3/12 h-20 justify-center flex items-center rounded-t-lg">
        Reset Password
      </h3>
      <form
        className=" border-2 w-3/12 p-5 rounded space-y-3 shadow-lg border-transparent bg-blue-50"
        // onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="username" className="block text-l">
            Username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            className="border p-2 w-full outline-none rounded-lg  focus:bg-gray-200"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="newpassword" className="block text-l">
            New Password
          </label>
          <input
            type="newpassword"
            id="newpassword"
            name="newpassword"
            className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirmnewpassword" className="block text-l">
            Confirm Password
          </label>
          <input
            type="confirmnewpassword"
            id="confirmnewpassword"
            name="confirmnewpassword"
            className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            // onChange={handleChange}
          />
        </div>
        <div className="flex justify-center ">
          <button className="border-orange-500 border px-6 py-2 rounded text-white- hover:text-white duration-200 hover:bg-orange-500 mt-10 w-full">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default resetpassword