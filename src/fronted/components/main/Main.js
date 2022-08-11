import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import Button from "../button/Button";
export const Main = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="grid-container">
          <div className="grid-item">
            <div className="image">
              <img
                src="/image/9f85bb67-e15e-4ce5-9fd4-4b5a520d5ac7.webp"
                alt=""
              />
            </div>
            <div className="text white">
              <h3>
                The Always Legendary <br /> Air Force 1
              </h3>
              <Button
                title="Shop"
                colorStyle="bg-white text-black"
                style="hover:#B2B2B2"
              />
            </div>
          </div>
          <div className="grid-item">
            <div className="image">
              <img
                src="/image/3d735f6a-0499-4d89-b56d-17b5c777b9cc.webp"
                alt=""
              />
            </div>
            <div className="text">
              <h3>
                New In Nike Basketball, <br /> Featuring the PG 6
              </h3>
              <Button title="Shop" colorStyle="bg-dark text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
