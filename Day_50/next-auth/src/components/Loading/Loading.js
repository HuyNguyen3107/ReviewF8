import React from "react";
import { CubeSpinner } from "react-spinners-kit";
import "./Loading.css";
const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <div className="loading-box">
        <div className="overlay-loading"></div>
        <div className="loading">
          <CubeSpinner
            size={70}
            frontColor="#00ff89"
            backColor="#686769"
            loading={isLoading}
          />
        </div>
      </div>
    )
  );
};

export default Loading;
