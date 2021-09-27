import { FaCartArrowDown } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { CartContextUse } from "../../../Context/CartContext";

function CartWiget() {
  const { badge } = CartContextUse();

  return (
    <>
      <Badge pill bg="success">
        <div>
          <FaCartArrowDown color="white" size={26} />
          {badge}
        </div>
      </Badge>
    </>
  );
}
export default CartWiget;
