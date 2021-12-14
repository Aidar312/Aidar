import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";

const Filters = ({ price, setPrice }) => {
 
  return (
    <div style={{ marginTop: "20px" }}>
      {/* <Select
        allowClear
        style={{ width: "100%" }}
        value={brand}
        onChange={(e) => setBrand(e)}
        mode="multiple"
        placeholder="Filter by brand"
      >
        {brands.map((item) => (
          <Select.Option value={item.brand} key={item.id}>
            {item.brand}
          </Select.Option>
        ))}
      </Select> */}
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        range
        defaultValue={[1, 1000]}
        min={0}
        max={10000}
        step={10}
      />
    </div>
  );
};

export default Filters;
