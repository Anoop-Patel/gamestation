"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./product.module.css";
import CategoryFilter from "@/component/filter/categoryfilter/CategoryFilter";
import {
  fetchAllCategory,
  fetchAllProduct,
} from "@/service/api/Function";
import SortIcon from "@/app/assets/images/sorticon.png";
import Sort from "@/component/sort/Sort";
import Card from "@/component/card/Card";
import Banner from "@/component/banner/Banner";

const Product = () => {
  const [allcategory, setAllCategory] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortState, setSortState] = useState({
    isModalOpen: false,
    sortOption: "",
  });
  const [isCategoryFilterVisible, setIsCategoryFilterVisible] = useState(true); 
  const [singleProduct, setSingleProduct] = useState(null);
  const randomIndex = Math.floor(Math.random() * productList.length);
  const getAllProduct = async () => {
    try {
      const res = await fetchAllProduct();
      if (res) {
        setProductList(res.data.products);
        setFilteredProductList(res.data.products); 
        setSingleProduct(res.data.products[randomIndex]);

      }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

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

  const filterProductsByCategory = () => {
    if (selectedCategory) {
      const filteredProducts = productList.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProductList(filteredProducts);
    } else {
      setFilteredProductList(productList);
    }
  };

  const sortProducts = (option) => {
    let sortedProducts = [...filteredProductList];
    if (option === "price-low-to-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "price-high-to-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "rating-high-to-low") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (option === "rating-low-to-high") {
      sortedProducts.sort((a, b) => a.rating - b.rating);
    }
    setFilteredProductList(sortedProducts);
  };

  useEffect(() => {
    getAllCategories();
    getAllProduct();
  }, []);

  useEffect(() => {
    filterProductsByCategory();
  }, [selectedCategory, productList]);

  useEffect(() => {
    if (sortState.sortOption) {
      sortProducts(sortState.sortOption);
    }
  }, [sortState.sortOption]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsCategoryFilterVisible(true); 
      } else {
        setIsCategoryFilterVisible(false); 
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSortOptionChange = (option) => {
    setSortState({ isModalOpen: false, sortOption: option });
  };

  const toggleSortModal = () => {
    setSortState((prevState) => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  const toggleCategoryFilter = () => {
    setIsCategoryFilterVisible((prevVisible) => !prevVisible);
  };

  return (
    < div className={styles.productpagewrapper}> 
    <div className={styles.productmaincontainer}>
      <div className={styles.filtercontainer}>
        {isCategoryFilterVisible && (
          <CategoryFilter
            filterList={allcategory}
            setSelectedCategory={setSelectedCategory}
          />
        )}
        <div className={styles.categoryfilter}>
          <span className={styles.sort} onClick={toggleCategoryFilter}>
            Category
          </span>
        </div>
      </div>
      <div className={styles.productcontainer}>
        <div className={styles.searchcontainer}>
          {selectedCategory && (
            <div className={styles.searchtext}>
              <span className={styles.text}>
                {`Search Result for "${selectedCategory}"`}
              </span>
              <span className={styles.resultnum}>
                {`${filteredProductList.length} results found`}
              </span>
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
          {filteredProductList.map((item) => (
            <Card key={item.id} cardData={item} />
          ))}
        </div>
      </div>
    </div>
          {singleProduct && <Banner   product={singleProduct}   flexstyle={"flex-end"} />}
          {singleProduct && <Banner   product={singleProduct}   flexstyle={"flex-start"} />}
          {singleProduct && <Banner   product={singleProduct}   flexstyle={"center"} />}

          </div>
  );
};

export default Product;
