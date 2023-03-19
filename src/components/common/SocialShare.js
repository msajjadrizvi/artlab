import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { useWindowSize } from "usehooks-ts";
import "./css/social.css";

export const SocialShare = ({ result }) => {
  const { width } = useWindowSize();
  const url = "https://example.com";
  const imageUrl =
    "https://www.teropongbmr.com/wp-content/uploads/2021/10/thumb-milestones.png";
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        position: "absolute",
        bottom: "40px",
        left: "0px",
        right: "0px",
        // justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: width > 500 ? "50%" : "80%",
          //   margin: "auto",
          justifyContent: "space-between",
          margin: "auto",
          //   margin: "auto",
          //   justifyItems: "center",
          // marginTop: "40px",
          // position: "absolute",
          // bottom: "40px",
        }}
      >
        <FacebookShareButton url={imageUrl} quote={result} media={imageUrl}>
          <FacebookIcon
            logoFillColor="white"
            round={true}
            size={width > 500 ? 52 : 40}
          />
        </FacebookShareButton>
        <WhatsappShareButton url={url} quote={result} media={imageUrl}>
          <WhatsappIcon
            logoFillColor="white"
            round={true}
            size={width > 500 ? 52 : 40}
          />
        </WhatsappShareButton>
        <LinkedinShareButton url={url} quote={result} media={imageUrl}>
          <LinkedinIcon
            logoFillColor="white"
            round={true}
            size={width > 500 ? 52 : 40}
          />
        </LinkedinShareButton>
      </div>
    </div>
  );
};
