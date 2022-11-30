import React from 'react';
import BookingModal from '../BookingModal';
import Loading from '../Loading';
import ProductCard from '../ProductCard';

const AdvertisedSection = ({advertisedProducts, bookingProduct, setBookingProduct, refetch, isLoading}) => {
    if(isLoading){
        return <Loading/>
    }
    return (
        <section className='my-10'>
        <h2 className='text-3xl text-start font-bold mb-5 ml-7'> Advertised Items</h2>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {advertisedProducts.map(product => <ProductCard key={product._id} product={product}/>)}
            </div>
            {bookingProduct && (
        <BookingModal
          bookingProduct={bookingProduct}
          setBookingProduct={setBookingProduct}
          refetch={refetch}
        />
      )}
        </section>
    );
};

export default AdvertisedSection;