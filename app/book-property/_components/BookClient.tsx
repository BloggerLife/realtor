"use client";
import React, { useState } from "react";
import useBookProperty from "@/hooks/useBookProperty";
import PaymentForm from "./PaymentForm";
// fuck stripe
const BookClient = () => {
  const { BookingData, clientSecret } = useBookProperty();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  const handleSetPaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  return (
    <div className="max-w-[1320px] m-auto">
      {clientSecret && BookingData && (
        <div>
          <h1 className="text-xl my-10 mx-10">
            Complete the payment to confirm the booking
          </h1>
          <PaymentForm handleSetPaymentSuccess={handleSetPaymentSuccess} />
        </div>
      )}
    </div>
  );
};

export default BookClient;
