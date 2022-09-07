import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import HotelDetails from "./HotelDetails";

const Cards = ({ data }) => {
  const navigate = useNavigate();
  const changeData = (id) => {
    <HotelDetails data={data} />;
    navigate(`/HotelDetails/${id}`);
  };
  return (
    <>
      {data.map((element, k) => {
        return (
          <>
            {/* onClick={() => navigate("/HotelDetails")} */}
            <Card
              style={{ width: "22rem", border: "none" }}
              className="hove mb-4"
              onClick={() => navigate("/HotelDetails", { state: element })}
            >
              <Card.Img variant="top" className="cd" src={element.imgdata} />

              <div className="card_body">
                <div className="upper_data d-flex justify-content-between align-items-center">
                  <h4 className="mt-2">{element.rname}</h4>
                  <span>{element.rating}&nbsp;★</span>
                </div>

                <div className="lower_data d-flex  justify-content-between">
                  <h5>{element.address}</h5>
                  <span>{element.price}</span>
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
