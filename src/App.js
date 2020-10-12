import React from "react";
import "./index.css";
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import SkillView from "./components/Skills";
import WorkView from "./components/Projects";
import AboutView from "./components/About";
import ContactView from "./components/Contact";
import InterestView from "./components/TopicInterest";

function App() {
  return (
    <div>
      <Header />
      <main className="l-main">
        <HomeView />
        <SkillView />
        <WorkView />
        <AboutView />
        <ContactView />
        <InterestView />
      </main>
    </div>
  );
}
export default App;
