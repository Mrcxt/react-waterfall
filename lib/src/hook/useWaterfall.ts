import { useMemo } from "react";
import type { WaterFallData, WaterFallOptions } from "../types";

/**
 * @description: waterfall layout hook
 * @param options
 * @returns
 */
export const useWaterfall = (options: WaterFallOptions): WaterFallData[][] => {
  const { dataSource = [], column = 4 } = options;

  const columnList = useMemo(() => {
    const columnHeight = Array(column).fill(0);

    return dataSource.reduce((pre, cur, i) => {
      const { width, height } = cur;
      const minIndex = columnHeight.indexOf(Math.min(...columnHeight));
      const ratio = Number(height) / Number(width);

      columnHeight[minIndex] += isNaN(ratio) ? 0 : ratio;
      pre[minIndex].push(cur);

      return pre;
    }, Array.from({ length: column }, () => []) as WaterFallData[][]);
  }, [dataSource, column]);

  return columnList;
};
