import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../components/BookingModal";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";

const ProductsHome = () => {
  const [bookingProduct, setBookingProduct] = useState({});
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products`);
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
      {products.length > 0 ? <></>: <h3 className="text-3xl">No products found</h3>}{products.map((product) => (
        <div key={product._id}>
          <ProductCard setBookingProduct={setBookingProduct} refetch={refetch} product={product} />
        </div>
      ))}
      {bookingProduct && <BookingModal bookingProduct={bookingProduct} setBookingProduct={setBookingProduct} refetch={refetch}/>}
    </div>
  );
};

export default ProductsHome;
