import React from 'react'
import { useState } from 'react';
import "./filtersidebar.scss";
import "./thank.scss";

const FilterSidebar = ({ products, onFilter }) => {
    const [filters, setFilters] = useState({
      category: '',
      priceRange: ''
    });
  
    const handleFilterChange = (filterName, value) => {
      setFilters(prevFilters => ({
        ...prevFilters,
        [filterName]: value
      }));
    };
  
    const handleApplyFilters = () => {
      const filteredProducts = products.filter(product => {
        let matchesCategory = true;
        let matchesPriceRange = true;
  
        if (filters.category) {
          matchesCategory = product.category === filters.category;
        }
  
        if (filters.priceRange) {
          matchesPriceRange = product.price >= filters.priceRange.min && product.price <= filters.priceRange.max;
        }
  
        return matchesCategory && matchesPriceRange;
      });
  
      onFilter(filteredProducts);
    };
  
    return (

  <div className="filter-sidebar">
  <h2>Filters</h2>

  <div className="filter-section">
    <h3>Category</h3>
    <ul>
      <li>
        <button onClick={() => handleFilterChange('category', '')}>All</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('category', 'electronics')}>Electronics</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('category', 'clothing')}>Clothing</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('category', 'home')}>Home</button>
      </li>
    </ul>
  </div>

  <div className="filter-section">
    <h3>Price Range</h3>
    <ul>
      <li>
        <button onClick={() => handleFilterChange('priceRange', { min: 0, max: Infinity })}>All</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('priceRange', { min: 0, max: 50 })}>Under $50</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('priceRange', { min: 50, max: 100 })}>$50 - $100</button>
      </li>
      <li>
        <button onClick={() => handleFilterChange('priceRange', { min: 100, max: Infinity })}>Over $100</button>
      </li>
    </ul>
  </div>

  <button onClick={handleApplyFilters}>Apply Filters</button>
</div>

    );
  };

export default FilterSidebar;
