import { BeatLoader } from "react-spinners";
import React from "react";

interface LoadingSpinnerProps {
  loading: boolean;
  size?: number;
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  loading,
  size = 16,
  color = "#5CFEF0",
}) => {
  const override: React.CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: color,
  };

  return loading ? (
    <div className="w-full h-screen flex justify-center items-center sweet-loading">
      <BeatLoader
        cssOverride={override}
        size={size}
        color={color}
        loading={loading}
        speedMultiplier={1.5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : null;
};

export default LoadingSpinner;
