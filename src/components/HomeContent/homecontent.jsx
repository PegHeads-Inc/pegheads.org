import React from "react";

import LessonContent from "../LessonContent/lessoncontent";

import "./homecontent.scss";

const HomeContent = () => (
    <div className="homecontent-container">
      <h1 className="title">New Lessons</h1>
      <LessonContent />
    </div>
);

export default HomeContent;
