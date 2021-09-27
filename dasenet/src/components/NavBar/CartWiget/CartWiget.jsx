import { FaCartArrowDown } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";
import { CartContextUse } from "../../../Context/CartContext";

function CartWiget() {
  const { badge } = CartContextUse();

  return (
    <>
      <Badge className="btn-warning">
        <FaCartArrowDown color="white" size={26} />
        {badge}
      </Badge>
    </>
  );
}
export default CartWiget;
