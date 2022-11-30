import React, { useContext } from "react";
import { AllContext } from "../../contexts/AllContextProvider";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import toast from "react-hot-toast";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllSellers = () => {
  const { loading } = useContext(AllContext);
  const url = `http://localhost:5000/users?role=Seller`;
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  const handleVerify = (uid) => {
    fetch(`http://localhost:5000/users/verify?uid=${uid}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("user verified successfully");
          refetch();
        }
      });
  };
  const handleDelete = (uid) => {
    fetch(`http://localhost:5000/users?uid=${uid}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("user deleted successfully");
          refetch();
        }
      });
  };
  if (loading || isLoading) return <Loading />;
  return (
    <div>
      <h2 className="text-3xl mb-5"> All Sellers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <td>{i + 1}</td>
                <td>
                  {seller.name}
                  {seller.verified && (
                    <FontAwesomeIcon
                      className="ml-2 text-blue-500"
                      title="verified"
                      icon={faCheckCircle}
                    />
                  )}
                </td>
                <td>{seller.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(seller.uid)}
                    className="btn btn-xs btn-error btn-outline mb-2"
                  >
                    Delete
                  </button>
                  <br />
                  {seller.verified ? (
                    <button
                      onClick={() => handleVerify(seller.uid)}
                      className="btn btn-xs btn-error btn-outline"
                    >
                      cancel verification
                    </button>
                  ) : (
                    <button
                      onClick={() => handleVerify(seller.uid)}
                      className="btn btn-xs btn-success btn-outline"
                    >
                      Verify
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
