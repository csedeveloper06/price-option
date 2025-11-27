import axios from "axios";
import React, { useEffect, useState } from "react";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((response) => setPhones(response.data.data));
  }, []);
  console.log(phones);

  return (
    <div className="bg-gray-100 my-5 py-12 text-center">
      <h2 className="text-7xl font-extrabold">{phones.length}</h2>
    </div>
  );
};

export default Phones;
