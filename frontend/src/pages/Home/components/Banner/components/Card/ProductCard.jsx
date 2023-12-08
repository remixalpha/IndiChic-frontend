import "./css/style.css";
import PropTypes from "prop-types";
// import data from "../../../../../../data/Home-page/data.json";

export default function ProductCard({ product }) {
  console.log("Received id:", product);
  // // Find the product based on the provided id
  // const product = data.products.find(
  //   (product) => product.widgetProductCard.id === id
  // );

  // // If product is not found, return an error message
  // Validate the structure of the product prop
  if (!product || !product.widgetProductCard) {
    return <div>Invalid product data</div>;
  }

  const { productName, productImage, discountText } = product.widgetProductCard;

  return (
    <div className="flex flex-col -space-y-10 items-center   cursor-pointer ">
      <div className="flex flex-col relative  h-[26rem] w-[20rem] overflow-hidden rounded-[4rem] bg-white bg-opacity-60   transition-all duration-300 animate-bounce-card  ">
        <div className=" m-2 -mb-1 overflow-hidden rounded-[4rem] bg-gray-800   transition-all duration-300">
          <img
            src={productImage}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h1 className=" mx-6 my-4 p-4 text-center text-3xl font-bold leading-9 tracking-tight text-black border border-gray-800 rounded-full ">
          {productName}
        </h1>
      </div>

      <div className=" h-32 w-32 ml-56 flex justify-center items-center overflow-hidden rounded-full bg-gray-500  transition-all duration-300 animate-bounces ">
        <h1 className=" text-center mx-4 text-white text-4xl font-bold leading-9 tracking-tight ">
          {discountText}
        </h1>
      </div>
    </div>
  );
}

// Add PropTypes for prop validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    widgetProductCard: PropTypes.shape({
      productName: PropTypes.string.isRequired,
      productImage: PropTypes.string.isRequired,
      discountText: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
