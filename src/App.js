import "./App.css";
import "antd/dist/antd.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Tabpane from "./components/Tabpane";

function App() {
  const [join, setJoin] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [secModal, setSecModal] = useState(false);

  return (
    <div className="App">
      <Header
        sign={isModalVisible}
        setSign={setIsModalVisible}
        reg={secModal}
        setReg={setSecModal}
      />
      <div className="section">
        <Tabpane
          join={join}
          onJoinChange={setJoin}
          sign={isModalVisible}
          setSign={setIsModalVisible}
          reg={secModal}
          setReg={setSecModal}
        />
        <div>
          <Posts
            join={join}
            onJoinChange={setJoin}
            sign={isModalVisible}
            setSign={setIsModalVisible}
            reg={secModal}
            setReg={setSecModal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
