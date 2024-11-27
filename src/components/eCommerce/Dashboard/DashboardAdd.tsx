import { useState } from "react";

const DashboardAdd = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [maxItem, setMaxItem] = useState("");
  const [img, setImg] = useState("");

  const handleAddProduct = async () => {
    const newProduct = {
      title,
      price: Number(price),
      cat_prefix: category,
      img,
      max: Number(maxItem),
    };

    await fetch("http://localhost:5005/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    alert("Product added successfully!");
    setTitle("");
    setPrice("");
    setMaxItem("");
    setCategory("");
    setImg("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="card shadow-lg p-4">
        <h4 className="mb-3">Add New Product</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              placeholder="Enter product title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Price AED
            </label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="MaxItem" className="form-label">
              Max prodcut user can add
            </label>
            <input
              type="number"
              className="form-control"
              id="maxItem"
              placeholder="Enter the number of item"
              value={maxItem}
              onChange={(e) => setMaxItem(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="productCategory"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
              <option value="baby">Baby</option>
              <option value="sport">Sport</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Image URL
            </label>
            <input
              type="text"
              className="form-control"
              id="productImage"
              placeholder="Enter image URL"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardAdd;
