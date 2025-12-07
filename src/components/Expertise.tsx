import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen, faNetworkWired, faRobot } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const mobileSkills = [
    "Flutter", "React Native", "Dart", "TypeScript", "Kotlin", "Swift (Basics)",
    "Clean Architecture", "BLoC", "MVVM"
];

const backendSkills = [
    "Node.js", "Flask", "Python", "PostgreSQL", "MongoDB", "Redis", "REST APIs", "Microservices"
];

const aiSkills = [
    "OpenAI", "LangChain", "RAG Systems", "LlamaIndex", "Groq", "Qdrant", "Hugging Face", "Firebase ML"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>

                <p className="sub-header">
                    I specialize in <strong>mobile-first engineering</strong>, building intelligent and scalable products
                    powered by modern backend & AI systems.
                </p>

                <div className="row-layout">

                    {/* BACKEND */}
                    <div className="side-card">
                        <FontAwesomeIcon icon={faNetworkWired} size="2x" />
                        <h3>Backend for Mobile</h3>
                        <p>
                            Secure APIs, scalable databases and real-time systems built to power production-grade mobile apps.
                        </p>
                        <div className="chip-box">
                            {backendSkills.map((e, i) => <Chip key={i} label={e} className="chip" />)}
                        </div>
                    </div>

                    {/* MOBILE CENTER */}
                    <div className="center-card">
                        <FontAwesomeIcon icon={faMobileScreen} size="3x" />
                        <h2>Mobile Engineering</h2>
                        <p>
                            High-performance mobile apps with clean architecture, great UX and maintainable code quality.
                        </p>
                        <div className="chip-box">
                            {mobileSkills.map((e, i) => <Chip key={i} label={e} className="chip" />)}
                        </div>
                    </div>

                    {/* AI */}
                    <div className="side-card">
                        <FontAwesomeIcon icon={faRobot} size="2x" />
                        <h3>AI for Mobile</h3>
                        <p>
                            Integrating LLMs, AI agents and RAG systems into apps to build next-gen mobile experiences.
                        </p>
                        <div className="chip-box">
                            {aiSkills.map((e, i) => <Chip key={i} label={e} className="chip" />)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
