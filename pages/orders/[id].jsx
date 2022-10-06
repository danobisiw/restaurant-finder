import React from "react";
import Image from "next/image";
import styles from "../../styles/Order.module.css"

const Order = () => {
const status = 0

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className="flex p-5">
      <div className="flex-1">
        <table className="px-5">
          <thead>
            <tr className="item-center">
              <th className="w-70">Order ID</th>
              <th className="w-70">Additional Request</th>
              <th className="w-70">Service Type</th>
              <th className="w-70">Customer Name</th>
              <th className="w-70">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="w-full justify-between items-center">
              <td>
                <h1 className=" text-[18]">ABC1244</h1>
              </td>
              <td className="font-normal">
                <span className="text-[18] mr-3 ml-3">Add more goat meat</span>
              </td>
              <td className="font-normal">
                <span className="text-[18] mr-3 ml-3">Pickup</span>
              </td>
              <td className="font-normal">
                <span className="text-[18] items-center">Danny</span>
              </td>
              <td className="text-base">
                <span className="text-[30]">GHC 1020</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="w-[80] flex justify-between my-20"></div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex lg:flex-col justify-between ">
        <div className="rounded-lg max-h-80 bg-gray-500 p-14 py-3 text-white shadow m-10 ml-3">
          <h2 className="text-xl flex items-center">CART TOTAL</h2>
          <div className="mr-">
            <b className="mr-5">SubTotal:</b>GHC 79.6
          </div>
          <div className="mr-2">
            <b className="mr-5">Discount: </b>GHC 0
          </div>
          <div className="mr-">
            <b className="mr-5">Total:</b>GHC 79.6
          </div>
          <button
            disabled
            className="border-orange-500 border px-6 py-2 rounded-2xl text-range-600 hover:text-white duration-200 hover:bg-orange-500 mt-10 w-full cursor-not-allowed"
          >
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
