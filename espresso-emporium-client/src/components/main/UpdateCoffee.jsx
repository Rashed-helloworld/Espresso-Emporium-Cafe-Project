import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const { _id, name, supplier, taste, details, quantity, price, photo} = useLoaderData();
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);
        //fetch put to db
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
            console.log('after update', data);
        })
    }
    return (
        <div>
            
      <section>
        <form onSubmit={handleUpdateCoffee}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Extra Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Quantity</label>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={price}
                className="input w-full"
              />
            </fieldset>
          </section>
          <fieldset className="fieldset my-6 border-2 p-6 rounded-xl bg-[#333c]">
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photo"
                defaultValue={photo}
              className="input w-full"
            />
                  </fieldset>
                  <input type="submit" value="Update Coffee Details" className="btn w-full" />
        </form>
      </section>
        </div>
    );
};

export default UpdateCoffee;