import React from "react";
import seetaara from '../assets/images/seetaara.jpeg';
import crypto from '../assets/images/crypto-talk.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                {/* Crypto Talkies */}
                <div className="project">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.cryptotalkies.ct"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={crypto} className="zoom" alt="thumbnail" width="100%" />
                    </a>

                    <a
                        href="https://play.google.com/store/apps/details?id=com.cryptotalkies.ct"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Crypto Talkies</h2>
                    </a>

                    <p>
                        A real-time crypto news and insights app built using <b>Flutter + Firebase</b>, featuring
                        offline-first caching, dynamic theming, personalized feeds, and chart-based market trend
                        visualizations. Designed a scalable content pipeline and optimized client-side rendering for smooth,
                        low-latency browsing even under high-frequency updates.
                    </p>
                </div>

                {/* Seetaara */}
                <div className="project">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.seetaara.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={seetaara} className="zoom" alt="thumbnail" width="100%" />
                    </a>

                    <a
                        href="https://play.google.com/store/apps/details?id=com.seetaara.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>Seetaara — Hyperlocal Commerce Platform</h2>
                    </a>

                    <p>
                        Government-funded (UP) fast-fashion hyperlocal marketplace where I led the end-to-end engineering.
                        Architected real-time inventory synchronization, vendor onboarding flows, and delivery-feasibility
                        logic using <b>Flutter, Firebase, Django REST, and Razorpay</b>.
                        Implemented a <b>Try & Buy</b> order lifecycle using state machines, stock-reservation guarantees,
                        courier handoff workflows, and automated reconciliation for accurate inventory.
                        Built location-aware storefronts using geolocation indexing to surface only fulfillable inventory,
                        significantly improving delivery reliability and reducing last-mile failures.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
