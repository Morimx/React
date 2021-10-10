import { FaCartArrowDown } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { CartContextUse } from "../../../Context/CartContext";

function CartWiget() {
  const { badge, cart } = CartContextUse();

  return (
    <>
      {cart.length === 0 ? (
        <FaCartArrowDown color="white" size={26} />
      ) : (
        <Badge pill bg="success">
          <FaCartArrowDown color="white" size={26} />
          {badge}
        </Badge>
      )}
    </>
  );
}
export default CartWiget;
