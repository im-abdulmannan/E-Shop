import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllShopProducts } from "../../redux/actions/productAction";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";

const ShopProfileData = ({ isOwner }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllShopProducts(id));
  }, []);

  const [active, setActive] = useState(1);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex gap-5">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5
              className={`font-[500] text-[20px] ${
                active === 1 ? "text-red-500" : "text-[#333]"
              } cursor-pointer`}
            >
              Shop Products
            </h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(2)}>
            <h5
              className={`font-[500] text-[20px] ${
                active === 2 ? "text-red-500" : "text-[#333]"
              } cursor-pointer`}
            >
              Running Events
            </h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5
              className={`font-[500] text-[20px] ${
                active === 3 ? "text-red-500" : "text-[#333]"
              } cursor-pointer`}
            >
              Shop Reviews
            </h5>
          </div>
        </div>

        <div>
          {isOwner && (
            <div>
              <Link to={"/dashboard"}>
                <div className={`${styles.button} !rounded-[4px] h-[42px]`}>
                  <span className="text-[#fff]">Go to Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
          {products &&
            products.map((i, index) => (
              <ProductCard key={index} data={i} isShop={true} />
            ))}
        </div>
      )}
    </div>
  );
};

export default ShopProfileData;
