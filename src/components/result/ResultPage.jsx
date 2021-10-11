import { useParams } from "react-router-dom";
import "./ResultPage.css";
// import { gql, useQuery } from "@apollo/client";
import ProductCard from "../card/ProductCard";
import Data from "../card/mock.json";
import { useEffect } from "react";
// const Loading = () => {
//   return (
//     <img
//       src="/spinner.gif"
//       style={{ display: "flex", margin: "0 auto" }}
//       alt="Loading spinner"
//     />
//   );
// };
// const SomeThingWentWrong = () => {
//   const buttonHandler = () => {
//     window.location.reload();
//   };
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <img
//         src="/SomeThingWentWrong.jpg"
//         style={{
//           display: "flex",
//           margin: "0 auto",
//           borderRadius: "20px",
//           width: "50vh",
//         }}
//         alt="SomeThing went Wrong!!"
//       />
//       <button onClick={buttonHandler}>Try Again</button>
//     </div>
//   );
// };
// const GET_PRODUCT_INFO = gql`
//   query GET_DATA($productId: String) {
//     getProductById(productId: $productId) {
//       id
//       title
//       description
//       images
//       price
//       inventory
//       reviews
//     }
//   }
// `;
function ResultPage() {
  const { id: productId } = useParams();
  // const { loading, error, data } = useQuery(GET_PRODUCT_INFO, {
  //   variables: { productId },
  // });

  useEffect(() => {
    console.log("data", Data.data.getProductById);
  }, []);


  return <ProductCard productInfo={Data.data.getProductById} />;
  // if (error) return <SomeThingWentWrong />;

  // if (loading) return <Loading />;
  // else {
  //   return (
  //     <div className="result-container">
  //       {data.getProductById ? (
  //         <ProductCard productInfo={data.getProductById} />
  //       ) : (
  //         <h1>No Product Found !!</h1>
  //       )}
  //     </div>
  //   );
  // }
}

export default ResultPage;
