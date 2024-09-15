"use client";
import React, { useState } from 'react';
import styles from './sort.module.css';

const SORT_OPTIONS = [
  { value: 'release-date-old-to-new', label: 'Release Date: Old to New' },
  { value: 'release-date-new-to-old', label: 'Release Date: New to Old' },
  { value: 'price-low-to-high', label: 'Price: Low to High' },
  { value: 'price-high-to-low', label: 'Price: High to Low' }
];

const Sort = ({ onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSortChange = (option) => {
    setSelectedOption(option);
    if (onSortChange) {
      onSortChange(option);
    }
  };

  return (
    <div className={styles.sortContainer}>
      <div className={styles.sortOptions}>
        {SORT_OPTIONS.map(({ value, label }) => (
          <button
            key={value}
            className={`${styles.sortButton} ${selectedOption === value ? styles.active : ''}`}
            onClick={() => handleSortChange(value)}
          >
            <span className={styles.label}>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sort;
