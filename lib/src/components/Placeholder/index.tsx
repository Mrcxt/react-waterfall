import type { CSSProperties, ReactNode } from "react";

export interface PlaceholderProps {
  children?: ReactNode;
  width: number;
  height: number;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

export default (props: PlaceholderProps) => {
  const { children, width, height, className, style } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          paddingTop: `${(Number(height) / Number(width)) * 100}%`,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
