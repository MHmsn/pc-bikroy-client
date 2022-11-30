import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import BookingModal from "../../components/BookingModal";
import Loading from "../../components/Loading";
import ProductCard from "../../components/ProductCard";
import { AllContext } from "../../contexts/AllContextProvider";

const ProductsCategory = () => {
  const [bookingProduct, setBookingProduct] = useState({});
  const { id } = useParams();
  const { loading } = useContext(AllContext);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: async () => {
      const res = await fetch(`https://pcbikroy-server.vercel.app/products/${id}`);
      const data = await res.json();
      return data;
    },
  });
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5">
      {products.length > 0 ? (
        <></>
      ) : (
        <h3 className="text-3xl">No products found</h3>
      )}
      {products.map((product) => (
        <div key={product._id}>
          <ProductCard
            setBookingProduct={setBookingProduct}
            refetch={refetch}
            product={product}
          />
        </div>
      ))}
      {bookingProduct && (
        <BookingModal
          bookingProduct={bookingProduct}
          setBookingProduct={setBookingProduct}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default ProductsCategory;
