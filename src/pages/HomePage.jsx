import React from "react";
import MainLayout from "../components/MainLayout";
import CodeArea from "../components/CodeArea";
import Animation from "../components/Animation";

const HomePage = () => {
  return (
    <MainLayout>
      <Animation />
      <CodeArea />
    </MainLayout>
  );
};

export default HomePage;
