// import React from "react";

const SocialLink = ({ url, children }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default SocialLink;
