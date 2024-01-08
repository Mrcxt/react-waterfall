export interface WaterFallData extends Record<string, any> {
  /**
   * @description: picture width
   */
  width: number;
  /**
   * @description: picture height
   */
  height: number;
}

export interface WaterFallOptions {
  /**
   * @description: data source
   */
  dataSource: WaterFallData[];
  /**
   * @description: column
   */
  column?: number;
}
