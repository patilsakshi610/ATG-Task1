import React, { useEffect, useState } from "react";
import { Input, Modal, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import useDimension from "./useDimension";
import "../css/header.css";

const { Search } = Input;

const Header = ({ reg, setReg, setSign, sign }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [width, height] = useDimension();
  const [secModal, setSecModal] = useState(false);
  const [login, setLogin] = useState(false);
  useEffect(() => {
    console.log(width);
  }, [width]);
  const showModal = () => {
    setIsModalVisible(true);
    setSecModal(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setSecModal(false);
  };
  const handleCancel1 = () => {
    setReg(false);
    setSign(false);
  };
  const secondModal = () => {
    setIsModalVisible(false);
    setSecModal(true);
  };
  const secondModal1 = () => {
    setReg(false);
    setSign(true);
  };
  const showLogin = () => {
    // setIsModalVisible(false);
    // setSecModal(false);
    // setLogin(true);
  };

  return (
    <div className="">
      <div className="top-bar">
        <img src="./logo.svg" alt="logo" />
        <div className="search-bar">
          <img
            alt="search"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzdhN2E3YSI+PHBhdGggZD0iTTg0Ljc1LDE4LjgzMzMzYy0zNi4yOTMyMywwIC02NS45MTY2NywyOS42MjM0MyAtNjUuOTE2NjcsNjUuOTE2NjdjMCwzNi4yOTMyNCAyOS42MjM0Myw2NS45MTY2NyA2NS45MTY2Nyw2NS45MTY2N2MxNi40NjAzMSwwIDMxLjQ5ODgzLC02LjEzOTQ0IDQzLjA3MzksLTE2LjE4NDlsNC4wMDk0NCw0LjAwOTQ0djEyLjE3NTQ2bDU2LjUsNTYuNWwxOC44MzMzMywtMTguODMzMzNsLTU2LjUsLTU2LjVoLTEyLjE3NTQ2bC00LjAwOTQ0LC00LjAwOTQ0YzEwLjA0NTQ2LC0xMS41NzUwNiAxNi4xODQ5LC0yNi42MTM1OCAxNi4xODQ5LC00My4wNzM5YzAsLTM2LjI5MzIzIC0yOS42MjM0MywtNjUuOTE2NjcgLTY1LjkxNjY3LC02NS45MTY2N3pNODQuNzUsMzcuNjY2NjdjMjYuMTE0OTQsMCA0Ny4wODMzMywyMC45NjgzOSA0Ny4wODMzMyw0Ny4wODMzM2MwLDI2LjExNDk0IC0yMC45NjgzOSw0Ny4wODMzMyAtNDcuMDgzMzMsNDcuMDgzMzNjLTI2LjExNDk0LDAgLTQ3LjA4MzMzLC0yMC45NjgzOSAtNDcuMDgzMzMsLTQ3LjA4MzMzYzAsLTI2LjExNDk0IDIwLjk2ODM5LC00Ny4wODMzMyA0Ny4wODMzMywtNDcuMDgzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
            style={{ height: "1rem" }}
          />
          <h1
            style={{
              fontWeight: "500",
              fontSize: "0.8rem",
              margin: "0 1rem",
              color: "#5C5C5C",
            }}
          >
            Search for your favorite groups in ATG
          </h1>
        </div>
        {!login ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "700",
              cursor: "pointer",
            }}
            onClick={showModal}
          >
            <span style={{ margin: "0" }}>Create account.</span>
            <span style={{ margin: "0 0.4rem", color: "#2F6CE5" }}>
              It's free!
            </span>
            <img src="https://img.icons8.com/material-rounded/10/000000/sort-down.png" />
          </div>
        ) : (
          <div
            style={{ display: "flex", alignItems: "center", fontWeight: "500" }}
          >
            <img
              style={{ width: "2.25rem" }}
              src="./assets/user4.png"
              alt="profile"
            />
            <span style={{ margin: "0 0.4rem" }}>Siddharth Goyal</span>
            <img src="https://img.icons8.com/material-rounded/10/000000/sort-down.png" />
          </div>
        )}
      </div>
      <img
        src="./assets/landingimg.png"
        alt="Laptop Image"
        className="landdesk"
      />
      <img
        src="./assets/landingmobile.png"
        alt="Laptop Image"
        className="landmobile"
      />
      <Modal
        visible={sign}
        maskClosable={true}
        footer={null}
        onCancel={handleCancel1}
        centered={true}
        closable={false}
        width={width}
        closable
        className="ant-modal-body"
        style={{ borderRadius: "20px", bottom: "0", padding: "0" }}
      >
        <div className="create">
          <h1
            style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0" }}
          >
            Welcome back!
          </h1>
          <div className="acc"></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "90%" }}>
            <Input
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Email"
            />
            <Input.Password
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Password"
            />
            <style>
              {`
                  .ant-input{
                    background-color:#F7F8FA;
                  } 
                  .ant-modal-content{
                    border-radius: 5px;
                  }
                `}
            </style>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={showLogin}
                style={{
                  padding: "0 1rem",
                  backgroundColor: "#2F6CE5",
                  color: "#fff",
                  margin: "1.25rem 0",
                }}
                shape="round"
              >
                Sign In
              </Button>
              <p
                className="createacc"
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setReg(true);
                  setSign(false);
                }}
              >
                or, Create Account
              </p>
            </div>

            <Button
              onClick={showLogin}
              block
              style={{ marginBottom: "0.5rem" }}
            >
              <img
                style={{ marginRight: "0.5rem" }}
                src="https://img.icons8.com/fluency/17/000000/facebook-new.png"
              />
              Sign up with Facebook
            </Button>
            <Button onClick={showLogin} block>
              <img
                style={{ marginRight: "0.5rem" }}
                src="https://img.icons8.com/fluency/16/000000/google-logo.png"
              />
              Sign up with Google
            </Button>
            <p
              style={{
                fontWeight: "400",
                fontSize: "0.7rem",
                margin: "1rem 0",
                textAlign: "center",
              }}
            >
              Forgot Password?
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        visible={reg}
        maskClosable={true}
        footer={null}
        onCancel={handleCancel1}
        centered={true}
        closable={false}
        closable
        width={width}
        className="ant-modal-body"
        style={{ borderRadius: "20px", bottom: "0", padding: "0" }}
      >
        <div className="create">
          <h1
            style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0" }}
          >
            Create Account
          </h1>
          <div className="acc"></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "90%" }}>
            <Input.Group compact>
              <Input
                style={{
                  width: "50%",
                  backgroundColor: "#F7F8FA",
                  padding: "0.5rem 1rem",
                }}
                placeholder="First Name"
              />
              <Input
                style={{
                  width: "50%",
                  backgroundColor: "#F7F8FA",
                  padding: "0.5rem 1rem",
                }}
                placeholder="Last Name"
              />
            </Input.Group>
            <Input
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Email"
            />
            <Input.Password
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Password"
            />
            <style>
              {`
                  .ant-input{
                    background-color:#F7F8FA;
                  } 
                  .ant-modal-content{
                    border-radius: 5px;
                  }
                `}
            </style>
            <Input
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Confirm Password"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={showLogin}
                style={{
                  padding: "0 1rem",
                  backgroundColor: "#2F6CE5",
                  color: "#fff",
                  margin: "1.25rem 0",
                }}
                shape="round"
              >
                Create Account
              </Button>
              <p
                className="createacc"
                style={{
                  marginLeft: "0.2rem",
                  marginBottom: "0",
                  cursor: "pointer",
                }}
                onClick={secondModal1}
              >
                or, Sign In
              </p>
            </div>

            <Button
              onClick={showLogin}
              block
              style={{ marginBottom: "0.5rem" }}
            >
              <img
                style={{ marginRight: "0.5rem" }}
                src="https://img.icons8.com/fluency/17/000000/facebook-new.png"
              />
              Sign up with Facebook
            </Button>
            <Button onClick={showLogin} block>
              <img
                style={{ marginRight: "0.5rem" }}
                src="https://img.icons8.com/fluency/16/000000/google-logo.png"
              />
              Sign up with Google
            </Button>
            <p
              style={{
                fontWeight: "400",
                fontSize: "0.7rem",
                margin: "1rem 0",
                textAlign: "center",
              }}
            >
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        visible={isModalVisible}
        maskClosable={true}
        footer={null}
        onCancel={handleCancel}
        centered={true}
        closable={false}
        width={800}
        className="ant-modal-body"
        style={{ borderRadius: "20px" }}
      >
        <div className="message">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="create">
          <h1
            style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0" }}
          >
            Create Account
          </h1>
          <div className="acc">
            <p style={{ marginBottom: "0" }}>Already have an account?</p>
            <p
              style={{
                color: "#2F6CE5",
                fontWeight: "700",
                marginLeft: "0.2rem",
                marginBottom: "0",
                cursor: "pointer",
              }}
              onClick={secondModal}
            >
              Sign In
            </p>
          </div>
        </div>
        <div className="cred">
          <div style={{ width: "50%" }}>
            <Input.Group compact>
              <Input
                style={{
                  width: "50%",
                  backgroundColor: "#F7F8FA",
                  padding: "0.5rem 1rem",
                }}
                placeholder="First Name"
              />
              <Input
                style={{
                  width: "50%",
                  backgroundColor: "#F7F8FA",
                  padding: "0.5rem 1rem",
                }}
                placeholder="Last Name"
              />
            </Input.Group>
            <Input
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Email"
            />
            <Input.Password
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Password"
            />
            <style>
              {`
                  .ant-input{
                    background-color:#F7F8FA;
                  } 
                  .ant-modal-content{
                    border-radius: 5px;
                  }
                `}
            </style>
            <Input
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Confirm Password"
            />
            <Button
              onClick={showLogin}
              style={{
                backgroundColor: "#2F6CE5",
                color: "#fff",
                margin: "1.25rem 0",
              }}
              shape="round"
              block
            >
              Create Account
            </Button>
            <Button
              onClick={showLogin}
              block
              style={{ marginBottom: "0.5rem" }}
            >
              <img
                style={{ marginRight: "0.5rem" }}
                src="https://img.icons8.com/fluency/17/000000/facebook-new.png"
              />
              Sign up with Facebook
            </Button>
            <Button onClick={showLogin} block>
              <img
                style={{ marginRight: "0.5rem" }}
                src="https://img.icons8.com/fluency/16/000000/google-logo.png"
              />
              Sign up with Google
            </Button>
          </div>
          <div style={{ width: "50%" }}>
            <img
              style={{ height: "20rem" }}
              src="./assets/illustration.png"
              alt="illustration"
            />
            <p style={{ fontWeight: "400", fontSize: "0.7rem" }}>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        visible={secModal}
        maskClosable={true}
        footer={null}
        onCancel={handleCancel}
        centered={true}
        closable={false}
        width={800}
        className="ant-modal-body"
      >
        <div className="message">
          <p>
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="create">
          <h1
            style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "0" }}
          >
            Sign In
          </h1>
          <div className="acc">
            <p style={{ marginBottom: "0" }}>Don't have an account yet?</p>
            <p
              style={{
                color: "#2F6CE5",
                fontWeight: "700",
                marginLeft: "0.2rem",
                marginBottom: "0",
                cursor: "pointer",
              }}
              onClick={showModal}
            >
              Create new for free!
            </p>
          </div>
        </div>
        <div className="cred">
          <div style={{ width: "50%" }}>
            <Input
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Email"
            />
            <Input.Password
              style={{ backgroundColor: "#F7F8FA", padding: "0.5rem 1rem" }}
              placeholder="Password"
            />
            <Button
              // onClick={showLogin}
              style={{
                backgroundColor: "#2F6CE5",
                color: "#fff",
                margin: "1.25rem 0",
              }}
              shape="round"
              block
            >
              Sign In
            </Button>
            <Button
              // onClick={showLogin}
              block
              style={{ marginBottom: "0.5rem" }}
            >
              <img
                style={{ marginRight: "0.5rem" }}
                src="https://img.icons8.com/fluency/17/000000/facebook-new.png"
              />
              Sign up with Facebook
            </Button>
            <Button onClick={showLogin} block>
              <img
                style={{ marginRight: "0.5rem" }}
                src="https://img.icons8.com/fluency/16/000000/google-logo.png"
              />
              Sign up with Google
            </Button>
            <p
              style={{
                textAlign: "center",
                marginTop: "2rem",
                fontWeight: "500",
              }}
            >
              Forgot Password?
            </p>
          </div>
          <div style={{ width: "50%" }}>
            <img
              style={{ height: "20rem" }}
              src="./assets/illustration.png"
              alt="illustration"
            />
            <p style={{ fontWeight: "400", fontSize: "0.7rem" }}>
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
