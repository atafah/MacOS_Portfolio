import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Navbar, Welcome, Dock } from "#components";
import TerminalWindow from "#windows/Terminal";
import SafariWindow from "#windows/Safari";
import ResumeWindow from "#windows/Resume";
import Finder from "#windows/Finder";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <TerminalWindow />
            <SafariWindow />
            <ResumeWindow />
            <Finder />
        </main>
    );
};

export default App;
