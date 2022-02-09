import React, { useState } from "react";
import { Card } from "antd";
import { Menu, Dropdown, Button, message, Space } from "antd";
import { ExclamationCircleOutlined, LikeTwoTone } from "@ant-design/icons";
import "../css/posts.css";

const Posts = ({ join, reg, setReg, setSign, sign }) => {
  const [follow, setFollow] = useState({
    btn1: true,
    btn2: true,
    btn3: true,
    btn4: true,
  });

  const postarr = [
    {
      post_img: "./assets/article1.png",
      category: { logo: "✍️", name: "Article" },
      post_title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      post_desc:
        "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      profile_img: "./assets/user1.png",
      profile_name: "Sarthak Kamra",
      views: "1.4k views",
    },
    {
      post_img: "./assets/article2.png",
      category: { logo: "🔬", name: "Education" },
      post_title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      post_desc:
        "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      profile_img: "./assets/user2.png",
      profile_name: "Sarah West",
      views: "1.4k views",
    },
    {
      post_img: "./assets/article3.png",
      category: { logo: "📅", name: "Meetup" },
      post_title: "Finance & Investment Elite Social Mixer @Lujiazui",
      post_desc: "",
      profile_img: "./assets/user3.png",
      profile_name: "Ronal Jones",
      views: "1.4k views",
      info: { logo: "./assets/info1.png", name: "Fri, 12 Oct, 2018" },
      place: "Ahemdabad, India",
      button: { text: "Visit Website", color: "#E56135" },
    },
    {
      category: { logo: "💼", name: "Job" },
      post_title: "Software Developer",
      post_desc: "",
      profile_img: "./assets/user4.png",
      profile_name: "Joseph Gray",
      views: "1.4k views",
      info: {
        logo: "./assets/info2.png",
        name: "Innovaccer Analytics Private Ltd.",
      },
      place: "Noida, India",
      button: { text: "Apply on Timesjobs", color: "#02B875" },
    },
  ];

  const arr = [];

  const menu = (
    <Menu>
      <Menu.Item key="1">Edit</Menu.Item>
      <Menu.Item key="2">Report</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </Menu>
  );

  return (
    <div className="maindiv">
      <div className="cards">
        {postarr.map((item) => {
          return (
            <Card
              key={item.post_title}
              bodyStyle={{
                padding: "0",
              }}
              className="solocard"
              cover={
                item.post_img && (
                  <img
                    src={item.post_img}
                    alt="article image"
                    style={{ height: "220px" }}
                  />
                )
              }
            >
              <div style={{ padding: "1.25rem" }}>
                <div className="category">
                  <span>{item.category.logo}</span>
                  <span>{item.category.name}</span>
                </div>
                <div className="title">
                  <h1>{item.post_title}</h1>
                  <Space wrap>
                    <Dropdown
                      overlay={menu}
                      trigger={["click"]}
                      placement="bottomRight"
                    >
                      <img
                        style={{ cursor: "pointer" }}
                        src="https://img.icons8.com/fluency-systems-filled/20/000000/dots-loading.png"
                      />
                    </Dropdown>
                  </Space>
                </div>
                {item.post_desc && (
                  <p style={{ fontSize: "1.188rem", fontWeight: "400" }}>
                    {item.post_desc}
                  </p>
                )}

                {item.info && (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "1rem 0",
                        gap: "4rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <img
                          src={item.info.logo}
                          style={{ width: "1.25rem" }}
                        />
                        <span style={{ margin: "0" }}>{item.info.name}</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <img src="https://img.icons8.com/material-outlined/16/000000/marker.png" />
                        <span style={{ margin: "0" }}>{item.place}</span>
                      </div>
                    </div>
                    <Button
                      style={{
                        borderRadius: "10px",
                        color: item.button.color,
                        fontWeight: "600",
                        marginBottom: "1rem",
                      }}
                      block
                    >
                      {item.button.text}
                    </Button>
                  </div>
                )}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <div className="profile">
                    <img src={item.profile_img} alt="userimage" />
                    <span>{item.profile_name}</span>
                  </div>
                  <div className="bottomright">
                    <div className="view">
                      <img src="https://img.icons8.com/material-outlined/18/000000/visible--v1.png" />
                      <span>{item.views}</span>
                    </div>
                    <div className="share">
                      <img src="https://img.icons8.com/ios-glyphs/14/000000/share--v1.png" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="postright">
        <div className="location">
          <div>
            <img src="https://img.icons8.com/material-outlined/16/000000/marker.png" />
            <span style={{ margin: "0", fontWeight: "400" }}>Noida, India</span>
          </div>
          <div>
            <img src="https://img.icons8.com/material-sharp/20/000000/edit--v1.png" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginTop: "2rem",
            opacity: "0.5",
          }}
        >
          <ExclamationCircleOutlined />
          <p style={{ marginLeft: "0.5rem", marginBottom: "0" }}>
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
        {!join && (
          <div style={{ marginTop: "4rem" }}>
            <div style={{ marginBottom: "1.7rem" }}>
              <LikeTwoTone
                twoToneColor="#777"
                style={{ marginRight: "0.3rem" }}
              />
              <span>RECOMMENDED GROUPS</span>
            </div>
            {[
              {
                img: "./assets/group1.png",
                name: "Leisure",
                button: "btn1",
              },
              {
                img: "./assets/group2.png",
                name: "Activism",
                button: "btn2",
              },
              {
                img: "./assets/group3.png",
                name: "MBA",
                button: "btn3",
              },
              {
                img: "./assets/group4.png",
                name: "Philosophy",
                button: "btn4",
              },
            ].map((each, i) => {
              return (
                <div className="groups" key={i}>
                  <div className="grp">
                    <img
                      src={each.img}
                      alt={each.button}
                      style={{ height: "2rem" }}
                    />
                    <p style={{ margin: "0" }}>{each.name}</p>
                  </div>

                  <div
                    className={follow[each.button] ? "follow" : "followed"}
                    onClick={() => {
                      setFollow({
                        ...follow,
                        [each.button]: !follow[each.button],
                      });
                    }}
                  >
                    <span style={{ margin: "0", fontSize: "0.8rem" }}>
                      {follow[each.button] ? "Follow" : "Followed"}
                    </span>
                  </div>
                </div>
              );
            })}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <p style={{ color: "#2F6CE5" }}>See More...</p>
            </div>
          </div>
        )}
      </div>
      <img
        className="edit"
        src="./assets/edit.png"
        alt="edit"
        onClick={() => {
          setReg(!reg);
        }}
      />
    </div>
  );
};

export default Posts;
