import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";
import { AllContext } from "../../contexts/AllContextProvider";

const AddAProduct = () => {
  const { userFromDB } = useContext(AllContext);
  const {
    register,
    handleSubmit,
    formState: { errors }, reset
  } = useForm();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://pcbikroy-server.vercel.app/categories");
      const data = res.json();
      return data;
    },
  });
  const imgbbKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (data) => {
    const date = new Date();
    data.time = date.toString();
    const image = data.img[0];
    data.sellerName = userFromDB.name;
    data.selleruid = userFromDB.uid;
    data.sellerVerified = userFromDB.verified;
    data.advertised = false;
    data.reported = false;
    data.booked = false;
    data.sold = false;
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          data.img = imgData.data.url;
          fetch("https://pcbikroy-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .then(res => res.json())
          .then(data => {
            if(data.acknowledged === true){
                toast.success('Item added successfully')
                reset();
            }
          })
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl">Add Product</h2>
      <form className="w-96 p-7" onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label>
            <span className="label-text text-lg"> Product Name</span>
          </label>
          <input
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("name", { required: "Product Name is required" })}
            type="text"
          />
        </div>
        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
        <div className="form-control w-full max-w-xs">
          <label>
            <span className="label-text text-lg">Location</span>
          </label>
          <input
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("location", { required: "location is required" })}
            type="text"
          />
        </div>
        {errors.location && (
          <p className="text-red-600">{errors.location?.message}</p>
        )}
        <div className="form-control w-full max-w-xs">
          <label>
            <span className="label-text text-lg">Original Price</span>
          </label>
          <input
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("originalPrice", {
              required: "Original Price is required",
            })}
            type="number"
          />
        </div>
        {errors.originalPrice && (
          <p className="text-red-600">{errors.originalPrice?.message}</p>
        )}
        <div className="form-control w-full max-w-xs">
          <label>
            <span className="label-text text-lg">Selling Price</span>
          </label>
          <input
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("sellingPrice", {
              required: "Selling Price is required",
            })}
            type="number"
          />
        </div>
        {errors.sellingPrice && (
          <p className="text-red-600">{errors.sellingPrice?.message}</p>
        )}
        <div className="form-control w-full max-w-xs">
          <label>
            <span className="label-text text-lg">Months of use</span>
          </label>
          <input
            className="mt-3 input input-bordered w-full max-w-xs"
            {...register("months", { required: "Months of use is required" })}
            type="number"
          />
        </div>
        {errors.months && (
          <p className="text-red-600">{errors.months?.message}</p>
        )}

        <div className="form-control w-full max-w-xs mt-3">
          <label>
            <span className="label-text text-lg">Category</span>
          </label>
          <select
            defaultValue="Select a category"
            className="select select-bordered w-full max-w-xs"
            {...register("categoryID", { required: true })}
          >
            <option disabled>Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label>
            <span className="label-text text-lg">Image</span>
          </label>
          <input
            className="mt-3 input input-bordered w-full max-w-xs p-2"
            {...register("img", { required: "Image is required" })}
            type="file"
          />
          {errors.img && <p className="text-red-600">{errors.img.message}</p>}
        </div>
        <input
          type="submit"
          value="Add Product"
          className="btn btn-outline my-5 w-full"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
