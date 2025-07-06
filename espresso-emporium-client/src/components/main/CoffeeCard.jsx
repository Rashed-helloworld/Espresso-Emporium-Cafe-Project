import React from "react";
import { Link } from "react-router";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, price, photo, supplier } = coffee;

  return (
    <div className="flex justify-around items-center p-2 rounded-xl border-2">
      <figure>
        <img src={photo} alt="coffee image" />
      </figure>
      <section>
        <p>Name: {name}</p>
        <p>Supplier: {supplier}</p>
        <p>Price: {price}</p>
      </section>
      <section>
        <div className="join join-vertical space-y-2">
          <Link to={`/coffeeDetails/${_id}`}>
            <button className="btn join-item bg-[#999]">View</button>
          </Link>
          <button className="btn join-item bg-[#999]">Edit</button>
          <button className="btn join-item bg-[#999]">Cancel</button>
        </div>
      </section>
    </div>
  );
};

export default CoffeeCard;
