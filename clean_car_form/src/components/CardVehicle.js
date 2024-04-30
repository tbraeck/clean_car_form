import React from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

// const vehicleImg =  '/ev-car.png';

const CardVehicle = ({ name, id, image }) => {
  const navigate = useNavigate();
const carImage =  'ev-car.png';
  return (
    <main>
      {/* <section style={{ backgroundImage: `url(${vehicleImgDefault})` }} className={styles['img-vehicle-default']}
                onClick={() => { navigate(`/vehicle/detail/${id}`) }}>
                <div className={styles['text-block']}>
                    <p className={`${styles['location-name']} ${styles['opacity']}`}>
                        {name}
                    </p>
                </div>
            </section> */}

      <div
        className={styles["img-vehicle"]}
        onClick={() => {
          navigate(`/vehicle/detail/${id}`);
        }}
      >
        <img
        //   src={`${process.env.REACT_APP_HOST}/${image}`}
        src={`${process.env.REACT_APP_HOST}/${carImage}`}

         
          className={styles["img-vehicle-default"]}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            // currentTarget.src = `${vehicleImgDefault}`;
          }}
          alt="avatar"
        />
        <div className={styles["text-block"]}>
          <p className={`${styles["location-name"]} ${styles["opacity"]}`}>
            {name}
          </p>
        </div>
      </div>

      {/* <section style={
                { backgroundImage: `url(${process.env.REACT_APP_HOST}/${image})` }
            } className={styles['img-vehicle']}
                onClick={() => { navigate(`/vehicle/detail/${id}`) }}>
                <div className={styles['text-block']}>
                    <p className={`${styles['location-name']} ${styles['opacity']}`}>
                        {name}
                    </p>
                </div>
            </section> */}
    </main>
  );
};

export default CardVehicle;