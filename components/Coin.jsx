import React from "react";
import styles from "../styles/Coin.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "web3uikit";

const Coin = ({ per, setPer, token, setModalToken, setVisible }) => {
  const [color, setColor] = useState("green");

  useEffect(() => {
    if (per < 50) {
      setColor("#c43d08");
    } else {
      setColor("green");
    }
  }, [per]);

  return (
    <div>
      <div className={styles.token}>{token}</div>
      <div className={styles.circle} style={{ boxShadow: `0 0 20px ${color}` }}>
        <div
          className={styles.wave}
          style={{
            marginTop: `${100 - per}%`,
            boxShadow: `0 0 20px ${color}`,
            backgroundColor: `${color}`,
          }}
        ></div>
        <div className={styles.percentage}>{per}</div>
      </div>

      <div className={styles.votes}>
        <Button
          onClick={() => {
            setPer(per - 1);
          }}
          color="red"
          text="Down"
          theme="colored"
          type="button"
        />
        <Button
          onClick={() => {
            setPer(per + 1);
          }}
          text="Up"
          theme="primary"
          type="button"
        />
      </div>
      <div className={styles.votes}>
        <Button
          onClick={() => {
            setModalToken(token);
            setVisible(true);
          }}
          text="INFO"
          theme="translucent"
          type="button"
        />
      </div> 
    </div>
  );
};

export default Coin;
