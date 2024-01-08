/*
 * @LastEditTime: 2024-01-08 13:59:56
 * @Description:
 * @Date: 2023-08-31 14:58:00
 * @Author: @周星星同学
 */
import Waterfall from "~/lib/index";
import mockData from "./mock/data";
import { useEffect, useState } from "react";
import { Spin } from "antd";

const pageSize = 30;
const total = mockData.length - 1;

export default () => {
  const [dataSource, setDataSource] = useState<typeof mockData>([]);
  const [current, setCurrent] = useState(1);

  const next = () => {
    console.log("next");
    setDataSource((prev) => {
      return [
        ...prev,
        ...mockData.slice((current - 1) * pageSize, current * pageSize),
      ];
    });
    setCurrent(current + 1);
  };

  useEffect(() => {
    console.log("dataSource", dataSource.length, total);
  }, [dataSource]);

  useEffect(() => {
    next();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Waterfall
        dataSource={dataSource}
        dataLength={dataSource.length}
        next={next}
        hasMore={dataSource.length < total}
        loader={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Spin spinning />
          </div>
        }
        endMessage={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            no more ~~~
          </div>
        }
        renderItem={(item) => {
          const { width, height, url } = item;
          return (
            <div
              style={{
                backgroundColor: "#b2b2b2",
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            >
              {/* { width / height } */}
              <img
                src={url}
                alt=""
                loading="lazy"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};
