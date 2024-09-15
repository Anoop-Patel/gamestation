"use client";
import React, { useState } from "react";
import styles from "./categoryfilter.module.css";
import Button from "@/component/button/Button";

const CategoryFilter = ({ filterList = [], setSelectedCategory = () => {} }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleCheckboxChange = (slug) => {
    if (selectedFilter === slug) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(slug); 
    }
  };

  const applyFilters = () => {
    setSelectedCategory(selectedFilter ? selectedFilter : "");
  };

  return (
    <div className={styles.filtercontainer}>
      <div className={styles.filtertitle}>Categories</div>
      <div className={styles.filterlist}>
        {filterList.length > 0 ? (
          filterList.map((filter) => (
            <div key={filter.slug} className={styles.filteritem}>
              <input
                type="checkbox"
                id={filter.slug}
                checked={selectedFilter === filter.slug}
                onChange={() => handleCheckboxChange(filter.slug)}
                className={styles.checkbox}
              />
              <span className={styles.filterlabel}>{filter.name}</span>
            </div>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
      <div className={styles.filterbutton}>
        <Button onClick={applyFilters} text={"Apply Filters"} />
      </div>
    </div>
  );
};

export default CategoryFilter;
