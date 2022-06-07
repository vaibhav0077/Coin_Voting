import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { ConnectButton, Modal } from "web3uikit";
import Coin from "../components/Coin";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [btc, setBtc] = useState(45);
  const [eth, setEth] = useState(85);
  const [link, setLink] = useState(30);
  const [visible, setVisible] = useState(false);
  const [modelToken, setModalToken] = useState();
  console.log("visible : ", visible);
  return (
    <div className={styles.container}>
      <div className="header flex flex-row justify-between p-5">
        <div className="text-gray-300 text-xl m-4">Logo Will Be Here</div>
        {typeof window !== "undefined" && window.ethereum && <ConnectButton />}
      </div>
      <div className="instruction text-gray-300 text-2xl text-center mt-10">
        What do you think which token is going up or Down ?
      </div>

      <div className={styles.list}>
        <Coin
          per={btc}
          setPer={setBtc}
          token={"BTC"}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
        <Coin
          per={eth}
          setPer={setEth}
          token={"ETH"}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
        <Coin
          per={link}
          setPer={setLink}
          token={"LINK"}
          setModalToken={setModalToken}
          setVisible={setVisible}
        />
      </div>
      <Modal
        isVisible={visible}
        onCloseButtonPressed={() => setVisible(false)}
        hasFooter={false}
        title={modelToken}
      >
        <div>
          <span style={{ color: "white" }}>{`Price: `}</span>$
        </div>
        <div>
          <span style={{ color: "white" }}>{`About`}</span>
        </div>
        <div>
          {modelToken &&
            abouts[abouts.findIndex((x) => x.token === modelToken)].about}
        </div>
      </Modal>
    </div>
  );
}
