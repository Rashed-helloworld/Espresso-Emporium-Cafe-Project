import React from "react";

const AddCoffee = () => {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const addCoffee = Object.fromEntries(formData.entries());
        console.log(addCoffee);

        //fetch post to db
        fetch('http://localhost:3000/coffees', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addCoffee)
        })
            .then(res => res.json())
            .then(data => {
            console.log('after post:', data);
        })
}

  return (
    <div>
      <section>
        <h1>Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </section>
      <section>
        <form onSubmit={handleAddCoffee}>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Supplier</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter Supplier Name"
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Taste</label>
              <input
                type="text"
                name="taste"
                placeholder="Add Coffee Taste"
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Extra Details</label>
              <input
                type="text"
                name="details"
                placeholder="Additional Details"
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter Quantity"
                className="input w-full"
              />
            </fieldset>
            <fieldset className="fieldset border-2 p-6 rounded-xl bg-[#333c]">
              <label className="label">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Price Per Unit"
                className="input w-full"
              />
            </fieldset>
          </section>
          <fieldset className="fieldset my-6 border-2 p-6 rounded-xl bg-[#333c]">
            <label className="label">PhotoURL</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter Photo URL"
              className="input w-full"
            />
                  </fieldset>
                  <input type="submit" value="Add Coffee" className="btn w-full" />
        </form>
      </section>
    </div>
  );
};

export default AddCoffee;
