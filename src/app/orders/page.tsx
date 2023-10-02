import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className=" w-full border-separate border-spacing-3">
        <thead className="">
          <tr className="text-left">
            <th className="hidden md:block">Order id</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">01</td>
            <td className="py-6 px-1">01/10/2023</td>
            <td className="py-6 px-1">R$ 100,00</td>
            <td className="hidden md:block py-6 px-1">Pizza</td>
            <td className="py-6 px-1">Preparando</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">01</td>
            <td className="py-6 px-1">01/10/2023</td>
            <td className="py-6 px-1">R$ 100,00</td>
            <td className="hidden md:block py-6 px-1">Pizza</td>
            <td className="py-6 px-1">Preparando</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">01</td>
            <td className="py-6 px-1">01/10/2023</td>
            <td className="py-6 px-1">R$ 100,00</td>
            <td className="hidden md:block py-6 px-1">Pizza</td>
            <td className="py-6 px-1">Preparando</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
