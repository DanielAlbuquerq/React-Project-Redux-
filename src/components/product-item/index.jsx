import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

//Redux Actions
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions";

const ProductItem = ({ product }) => {

  const dispatch = useDispatch()

//function to trigger the disptach method
  const handleProductClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton onClick={handleProductClick} startIcon={<BsCartPlus/>}>
          Add to cart
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
