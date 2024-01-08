/*
 * @LastEditTime: 2024-01-05 18:25:07
 * @Description:
 * @Date: 2024-01-05 11:49:34
 * @Author: @周星星同学
 */
import type { WaterFallData, WaterFallOptions } from "./types";
import type { CSSProperties, ReactNode } from "react";
import InfiniteScroll, {
  type Props as InfiniteScrollProps,
} from "react-infinite-scroll-component";
import { useWaterfall } from "./hook/useWaterfall";
import Placeholder from "./components/Placeholder";
import { useId } from "react";

interface WaterFall
  extends WaterFallOptions,
    Omit<InfiniteScrollProps, "children"> {
  className?: string;
  style?: CSSProperties;

  /**
   * @description: waterfall height
   * @type {number | string}
   * @default: 100%
   */
  height?: number | string;

  /**
   * @description: column className
   * @type {string}
   */
  columnClass?: string;
  /**
   * @description: column style
   * @type {CSSProperties}
   */
  columnStyle?: CSSProperties;
  /**
   * @description: item className
   * @type {string}
   */
  /**
   * @description: item render
   * @type {Function}
   */
  renderItem?: (item: WaterFallData) => ReactNode;
  /**
   * @description: item gap
   * @type {number}
   */
  gap?: number;
  /**
   * @description: item gapX (priority) gap
   * @type {number}
   */
  gapX?: number;
  /**
   * @description: item gapY (priority) gap
   * @type {number}
   */
  gapY?: number;
}

export default (props: WaterFall) => {
  const {
    style,
    className,
    dataSource,
    column = 4,
    columnClass,
    columnStyle,
    gap = 10,
    gapX,
    gapY,
    renderItem,
    height: _height = "100%",
    ...infiniteProps
  } = props;

  const id = useId();

  const columns = useWaterfall({
    dataSource,
    column,
  });

  return (
    <div
      id={id}
      style={{
        overflowY: "auto",
        height: typeof _height === "number" ? `${_height}px` : _height,
      }}
    >
      <InfiniteScroll {...infiniteProps} scrollableTarget={id}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${column}, 1fr)`,
            columnGap: `${gapX ?? gap}px`,
          }}
        >
          {columns?.map((column, index) => (
            <div
              key={index}
              className={columnClass}
              style={{
                ...columnStyle,
                display: "grid",
                gridAutoFlow: "row",
                rowGap: `${gapY ?? gap}px`,
                alignContent: "start",
              }}
            >
              {column.map((item, i) => {
                const { width, height } = item;
                return (
                  <Placeholder key={i} width={width} height={height}>
                    {renderItem?.(item)}
                  </Placeholder>
                );
              })}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
