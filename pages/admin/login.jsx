import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    loginAs: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: data.username,
      password: data.password,
      loginAs: data.loginAs,
      redirect: false,
      callbackUrl: "/",
    });
    if (result.error) {
      setError(result.error);
    } else {
      router.push(router.query.redirect || "/"); //pushes the page to where the user was/in before he logged in
    }
  };
  return (
    <div className="flex  min-h-[calc(100vh-100px)] justify-center items-center">
      <form
        className=" border-3 max-w-l w-4/12 p-5 rounded space-y-3 border-opacity-30 shadow-md  flex-col-2  bg-blue-50"
        onSubmit={handleSubmit}
      >
        <div className="bg-gray-100  h-20 justify-center flex items-center rounded-lg text-2xl">
          LOGIN
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div>
          <label htmlFor="loginAs" className="block text-l">
            Login As
          </label>
          <select
            name="loginAs"
            id="loginAs"
            type="loginAs"
            className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
            value={data.loginAs}
            onChange={handleChange}
          >
            <option value="selecttype">-----Login As----</option>
            <option value="buyer">Buyer</option>
            <option value="Shop">Shop</option>
          </select>
        </div>
        <div>
          <label htmlFor="username" className="block text-l">
            Username
          </label>
          <input
            type="username"
            id="username"
            name="username"
            className="border p-2 w-full outline-none rounded-lg focus:bg-gray-100"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-l">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border p-2 w-full outline-none rounded-lg focus:bg-gray-100"
            value={data.password}
            onChange={handleChange}
          />
          <span className="text-opacity-5 font-normal ">
            New user?
            <Link href="/loginlanding" className="hover:underline">
              Click here
            </Link>
          </span>
        </div>

        <div className="flex justify-center">
          <button className="border-orange-500 border px-6 py-2 rounded-3xl text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-80">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
