"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProductById, fetchProductByCategory } from "@/service/api/Function";
import styles from "./product.module.css";
import { description } from "@/app/dummy";
import ActiveStar from "@/app/assets/images/activestar.png";
import InActiveStar from "@/app/assets/images/blankstar.png";
import BackArrow from "@/app/assets/images/backarrow.png";

import Button from "@/component/button/Button";
import Card from "@/component/card/Card";
import Sliders from "@/component/slider/Slider";
import ReviewSlider from "@/component/slider/reviewslider/ReviewSlider";

const SingleProduct = () => {
  const { id } = useParams();
  const router = useRouter();

  const [productData, setProductData] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderStars = (rating) => {
    const totalStars = 5;
    const activeStars = Math.floor(rating);
    const inactiveStars = totalStars - activeStars;

    return (
      <>
        {[...Array(activeStars)].map((_, i) => (
          <Image
            key={i}
            src={ActiveStar}
            alt="active star"
            width={18}
            height={18}
          />
        ))}
        {[...Array(inactiveStars)].map((_, i) => (
          <Image
            key={i}
            src={InActiveStar}
            alt="inactive star"
            width={18}
            height={18}
          />
        ))}
      </>
    );
  };

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await fetchProductById(id);
      if (res) {
        setProductData(res.data);

        const categoryRes = await fetchProductByCategory(res.data.category);
        if (categoryRes) {
          setCategoryList(categoryRes.data);
        }
      }
    } catch (error) {
      console.error("Error fetching product", error);
    } finally {
      setLoading(false);
    }
  };
const handleBack=()=>{
  router.push("/product");

}
  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, [id]);

  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/signin");
    }
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product not found</div>;
  }
  return (
    <div className={styles.productmaincontainer}>
      <div className={styles.backbutton} onClick={handleBack}>
        
      <Image
            src={BackArrow}
            alt="back"
            width={13}
            height={20}
          /> </div>
      <div className={styles.productcontainer}>
        <div className={styles.Imagecontainer}>
          <div className={styles.relesecontainer}>
            <div className={styles.warrantycontainer}>
              <span className={styles.warrenty}>
                {productData.warrantyInformation}
              </span>
            </div>
            <div className={styles.starcontainer}>
              {renderStars(productData.rating)}
            </div>
          </div>
          <div className={styles.infocontainer}>
            <span className={styles.postertitle}>{productData.title}</span>
            <Button text={"Try Now"} />
            <div className={styles.livecontainer}>
              <div className={styles.live}></div>
              <span className={styles.livetext}>{description.order}</span>
            </div>
          </div>
          <div className={styles.availablecontainer}>
            <span className={styles.avaltext}>
              {productData.shippingInformation}
            </span>
          </div>
        </div>
        <div className={styles.descrptioncontainer}>
          <span className={styles.descrption}>{productData.description}</span>
          <span className={styles.descrption2}>{description.dummydata}</span>
        </div>
        <div className={styles.productnamecontainer}>
          <span className={styles.name}>{description.name}</span>
          <span className={styles.title}>{productData.title}</span>
          <span className={styles.descrption2}>{description.dummydata}</span>
        </div>
      </div>

      <div className={styles.relatedProductsContainer}>

      <ReviewSlider name={" Reviews from other customers"} actionname={"View More"} productList={productData.reviews}/>
       
         <Sliders
          name={"Product recommended for you"}
          actionname={"View All"}
          productList={categoryList.products
          }
        />
      </div>
    </div>
  );
};

export default SingleProduct;
