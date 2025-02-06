import React, { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [formData, setFormData] = useState({
    quantity: 0,
    price: 0,
    profit: 0,
    total: 0
  });

  useEffect(() => {
    fetch(`http://localhost:3000/api/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch values");
        }
        return response.json();
      })
      .then((data) => {
        setFormData(data);
      })
      .catch(error => {
        console.log(error);
      });

  }, [])

  useEffect(() => {
    const total = formData.quantity * formData.price;
    setFormData({ ...formData, total: total });

  }, [formData.quantity, formData.price]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  return (
    <div className="w-screen h-screen bg-[#262628] px-[30%] flex flex-col justify-center align-middle">
      <div className="text-5xl text-[#FFF6EE] font-semibold mb-20 text-center">User Form</div>
      <form>
        <div className="grid grid-cols-2 gap-4 text-[#FFF6EE] text-2xl">
          <div className="">Enter quantity: </div>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="border p-2 rounded placeholder:text-[#FFF6EE] focus:outline-[#8e84fc]"
          />

          <div>Enter price: </div>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 rounded placeholder:text-[#FFF6EE] focus:outline-[#8e84fc]"
          />

          <div>Enter profit (&#37;): </div>
          <input
            type="number"
            name="profit"
            value={formData.profit}
            onChange={handleChange}
            className="border p-2 rounded placeholder:text-[#FFF6EE] focus:outline-[#8e84fc]"
          />

          <div className="">Total calculated : </div>
          <div className="border p-2 rounded placeholder:text-[#FFF6EE] bg-[#4d2897]">{formData.total}</div>

        </div>
      </form>
    </div>
  );
};

export default App;