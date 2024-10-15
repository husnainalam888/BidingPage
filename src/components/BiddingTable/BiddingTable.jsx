import React, { useState } from "react";
import "./BiddingTable.css";
import { Table } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Bid Amount",
    dataIndex: "bid_amount",
  },
  {
    title: "Time",
    dataIndex: "time",
  },
];

const dataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  bid_amount: "40,000 SAR",
  time: `10 Sec ago`,
}));

const BiddingTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  return (
    <Table
      className="bidding-table"
      columns={columns}
      dataSource={dataSource}
      pagination={{
        pageSize: 5,
        showLessItems: true,
        position: ["bottomCenter"],
      }} // Set number of rows per page
    />
  );
};

export default BiddingTable;
