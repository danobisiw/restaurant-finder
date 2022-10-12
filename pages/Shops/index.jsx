import React from "react";
import axios from "axios";
import Link from "next/link";

export const getServerSideProps = async () => {
  const result = await axios.get("http://localhost:3000/api/shops");
  // console.log(result)
  return {
    props: {
      shops: result.data.shops,
    },
  };
};

const Shops = ({ shops }) => {
  return (
    <div>
  
      <span>
        <h5 className="text-2xl mb-4">Available Shops</h5>
      </span>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-normal text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Vendor Name
              </th>
              <th scope="col" className="py-3 px-6">
                Location
              </th>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Region
              </th>
              <th scope="col" className="py-3 px-6">
                Service Type
              </th>
              <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                Contact Number
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
            </tr>
          </thead>

          {shops.map((shop) => (
            <tbody key={shop._id} shop={shop}>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="py-4 px-6 font-lg text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  <Link href="/menu/menusdata">{shop.shopName}</Link>
                </th>
                <td className="py-4 px-6">{shop.region}</td>
                <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                  {shop.location}
                </td>
                <td className="py-4 px-6">{shop.serviceType}</td>
                <td className="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                  {shop.contactNumber}
                </td>
                <td className="py-4 px-6">{shop.email}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Shops;
