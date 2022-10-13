import axios from "axios";
import React, { useState,} from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import isWindow from "../../utils/isWindow";

const AddMenu = () => {
  const router = useRouter();
  const item = isWindow && sessionStorage.getItem("authdata");
  const parsedata = JSON.parse(item);

  const [data, setData] = useState({
    imageUrl: null,
    menuDescription: "",
    price: "",
    available: "",
    menuName: "",
    seller: parsedata?.seller,
  });
  const [error, setError] = useState("");

  const { data: session } = useSession();
  // console.log(session);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      //type of data to br processed

      formData.append("file", data.imageUrl);
      formData.append("upload_preset", "mern_blog");

      // console.log(data);

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/danobisiw/image/upload",
        formData
      );

      // console.log(response);

      const post = {
        ...data,
        menuUrl: response.data.url,
      };

      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`, post);

      router.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  // useEffect(() => {
  //   const item = isWindow && sessionStorage.getItem("authdata");
  //   if (!item) {
  //     router.push("/admin/shop-registration");
  //   }
  // }, [router]);

  return (
    <div className="flex  min-h-[calc(100vh-100px)] justify-center items-center text-gray-700 my-2">
      <form
        className=" border-3 max-w-l w-4/12 p-3 rounded border-opacity-60 shadow-md bg-blue-50 text-gray-700"
        onSubmit={handleSubmit}
      >
        <div className="bg-gray-100 text-2xl h-20 justify-center flex items-center rounded-lg">
          Add Menu
        </div>
        {error && <p className="text-center text-red-500">{error}</p>}
        <div className=" grid w-full items-center">
          <div className="text-gray-700">
            <label htmlFor="menuName" className="block text-l">
              Menu Name
            </label>
            <input
              type="menuName"
              id="menuName"
              name="menuName"
              className="border p-2 w-full resize-none rounded-lg focus:bg-gray-200 text-gray-700 outline-none "
              value={data.menuName}
              onChange={handleChange}
            />
          </div>

          <div className="text-gray-700">
            <label htmlFor="seller" className="block text-l">
              Shop
            </label>
            <input
              type="seller"
              id="seller"
              name="seller"
              required
              className="border p-2 w-full  rounded-lg focus:bg-gray-200 outline-none"
              value={data.seller}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="menuDescription" className="block text-l">
              Menu Description
            </label>
            <textarea
              name="menuDescription"
              cols="5"
              id="menuDescription"
              rows="5"
              className="border p-2 w-full rounded-lg focus:bg-gray-200 resize-none outline-none"
              value={data.menuDescription}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-l">
              Price
            </label>
            <input
              type="price"
              id="price"
              name="price"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="available" className="block text-l">
              Available On
            </label>
            <input
              type="available"
              id="available"
              name="available"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              value={data.available}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="menuUrl" className="block text-l">
              Menu Image
            </label>
            <input
              type="file"
              id="menuUrl"
              name="menuUrl"
              className="border p-2 w-full outline-none rounded-lg focus:bg-gray-200"
              // value={data.menuURL}
              onChange={(e) =>
                setData({ ...data, imageUrl: e.target.files[0] })
              }
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="border-orange-500 border px-6 py-2 rounded-xl text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-96 justify-center items-center flex">
            Add Menu
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
