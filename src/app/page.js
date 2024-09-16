"use client";
import { useEffect, useState } from "react";
import Sidebar from "@/component/sidebar/Sidebar";
import styles from "./page.module.css";
import Sliders from "@/component/slider/Slider";
import BannerSlider from "@/component/slider/bannerslider/BannerSlider";
import Banner from "@/component/banner/Banner";
import { fetchAllProduct } from "@/service/api/Function";

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [productList, setProductList] = useState([]);
  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [lowPriceProducts, setLowPriceProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  const getAllProduct = async () => {
    try {
      const res = await fetchAllProduct();
      if (res) {
        const products = res.data.products;

        const sortedByRating = [...products].sort(
          (a, b) => b.rating - a.rating
        );
        setTopRatedProducts(sortedByRating);
        setSingleProduct(products[0]);

        const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
        setLowPriceProducts(sortedByPrice);

        setProductList(products);
      }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className={styles.homepagemaincontainer}>
      <div className={styles.homepagecontainer}>
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        {singleProduct && (
          <BannerSlider
            isExpanded={isExpanded}
            bannerProducts={topRatedProducts.slice(0, 3)}
          />
        )}
      </div>
      <div>
        <Sliders
          name={"MOST RATED"}
          actionname={"GO TO PRODUCT STORE"}
          productList={topRatedProducts}
        />
        {singleProduct && <Banner product={singleProduct}  flexstyle={"center"}/>}

        <Sliders
          name={"MOST LOW PRICE"}
          actionname={"GO TO PRODUCT STORE"}
          productList={lowPriceProducts}
        />

        {singleProduct && <Banner product={singleProduct}   flexstyle={"flex-end"} />}
      </div>
    </div>
  );
}
