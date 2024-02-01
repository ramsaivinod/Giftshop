import React, { useEffect, useState } from "react";
import SitemapItem from "./SitemapItem";
import "./SiteMap.css";
import { fetchDataFromApi } from "../utils/api";
import { CircularProgress } from "@mui/material";
import { getData } from "../api/Api";

const Sitemap = () => {
  const [sitemapData, setSitemapData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSiteMap = () => {
    setLoading(true);
    getData("/api/gift-shop-sitemap-page")
      .then((response) => setSitemapData(response?.data.attributes.sitemap))
      .catch((error) => console.error("Error fetching MegaMenu:", error))
      .finally(() => {
        setLoading(false);
      });

    // setLoading(true);
    // try {
    //   const response = await fetchDataFromApi("/api/gift-shop-sitemap-page");

    //   if (response) {
    //     setSitemapData(response?.data.attributes.sitemap);
    //   }
    // } catch (error) {
    //   console.error("Error fetching MegaMenu:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getSiteMap();
  }, []);

  return (
    <div>
      <div className="main-section container">
        <div className="sitemap" style={{ width: "100%" }}>
          {loading && <CircularProgress />}
          {!loading &&
            sitemapData?.map((section, index) => (
              <SitemapItem
                key={index}
                title={section.title}
                items={section.items}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
