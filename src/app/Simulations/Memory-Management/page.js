"use client";
import {useState } from "react";
import './page.css';
import Introduction from "@/static/Introduction.json";
import Objective from "@/static/Objective.json";
import ListOfExperiments from "@/static/ListOfExperiments.json";
import Feedback from "@/static/Feedback.json";
import Link from "next/link";

const MemoryManagement= () => {
    const [textToDisplay, setTextToDisplay] = useState({ text: "" });
    const [selectedFrame, setSelectedFrame] = useState('Introduction');

    const handleClick = (e) => {
        const target = e.target;
        const text = target.textContent;
        setSelectedFrame(text);
        if (text) {
            switch (text) {
                case "Introduction":
                    setTextToDisplay({ text: Introduction.content });
                    break;
                case "Objective":
                    setTextToDisplay({ text: Objective.content });
                    break;
                case "List of experiments":
                    setTextToDisplay({
                        text: ListOfExperiments.map((experiment) => (
                            <li key={experiment.id} className="experiment-list">
                                <Link href={`/Memory-Management/${experiment.name}`} >{experiment.name}</Link>
                            </li>
                        ))
                    });
                    break;
                case "Feedback":
                    setTextToDisplay({ text: Feedback.content });
                    break;
                default:
                    setTextToDisplay({ text: Introduction.content });
                    break;
            }
        }
    }

    return (
        <section className="contact-tab-frame">
            <div className="main-frame">
                <div className="child-frame">
                    <div className="operating-system">{`Operating System `}</div>
                </div>
                <div className="parent-text-frame">
                    <div className="ndhu-csie-junior-project">
                        <div className="os-frame">
                            <div className="intro-obj-fed-frame">
                                <div className='introduction1' onClick={handleClick}><p className={`sidebar ${selectedFrame === 'Introduction' ? 'selected-frame' : ''}`}>Introduction</p></div>
                                <div className="objective" onClick={handleClick}><p className={`sidebar ${selectedFrame === 'Objective' ? 'selected-frame' : ''}`}>Objective</p></div>
                                <div className="objective-frame">
                                    <div className="list-of-experiments" onClick={handleClick}><p className={`sidebar ${selectedFrame === 'List of experiments' ? 'selected-frame' : ''}`}>List of experiments</p></div>
                                </div>
                                <div className="feedback" onClick={handleClick}><p className={`sidebar ${selectedFrame === 'Feedback' ? 'selected-frame' : ''}`}>Feedback</p></div>
                            </div>
                        </div>
                        <div className="parent-frame">
                            <div className="title" />
                        </div>
                    </div>
                    <div className="title-text">
                        <div className="korem-ipsum-dolor">
                            {textToDisplay.text || Introduction.content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MemoryManagement;