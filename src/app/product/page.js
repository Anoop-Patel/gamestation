"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./product.module.css";
import CategoryFilter from "@/component/filter/categoryfilter/CategoryFilter";
import {
  fetchAllCategory,
  fetchProductByCategory,fetchAllProduct
} from "@/service/api/Function";
import SortIcon from "@/app/assets/images/sorticon.png";
import Sort from "@/component/sort/Sort";
import Card from "@/component/card/Card";

const Product = () => {
  const [allcategory, setAllCategory] = useState([]);
  const [productList,setProductList]=useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryProduct, setSelectedCategoryProduct] = useState([]);
  const [sortState, setSortState] = useState({
    isModalOpen: false,
    sortOption: "",
  });

const getAllProduct=async()=>{
  try {
    const res = await fetchAllProduct();
    if (res) {
      setProductList(res.data.products);
    }
  } catch (error) {
    console.error("Error fetching categories", error);
  }
}



  const getAllCategories = async () => {
    try {
      const res = await fetchAllCategory();
      if (res) {
        setAllCategory(res.data);
      }
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };


  const getAllSelectedCategoryProduct = async (data) => {
    try {
      const res = await fetchProductByCategory(data);
      if (res) {
        setSelectedCategoryProduct(res.data);
      }
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllProduct();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      getAllSelectedCategoryProduct(selectedCategory);
    }
  }, [selectedCategory]);

  const handleSortOptionChange = (option) => {
    setSortState({ isModalOpen: false, sortOption: option });
  };

  const toggleSortModal = () => {
    setSortState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };
console.log(productList,"productList")
  return (
    <div className={styles.productmaincontainer}>
      <div className={styles.filtercontainer}>
        <CategoryFilter
          filterList={allcategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className={styles.productcontainer}>
        <div className={styles.searchcontainer}>
          {selectedCategory && (
            <div className={styles.searchtext}>
              <span
                className={styles.text}
              >{`Search Result for "${selectedCategory}"`}</span>
              <span
                className={styles.resultnum}
              >{`${selectedCategory.length} results found`}</span>
            </div>
          )}
          <div className={styles.filterbycontainer}>
            <span className={styles.sort} onClick={toggleSortModal}>
              sort by
            </span>
            <Image
              src={SortIcon}
              className={styles.logo}
              alt="sort"
              onClick={toggleSortModal}
            />
          </div>
          {sortState.isModalOpen && (
            <div className={styles.sortmodal}>
              <Sort onSortChange={handleSortOptionChange} />
            </div>
          )}
        </div>
        <div className={styles.productlistcontainer}>

{[...Array(18)].map((item)=>{
  return <Card/>;

})

}


        </div>
      </div>
    </div>
  );
};

export default Product;
