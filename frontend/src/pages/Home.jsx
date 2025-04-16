import React from "react";
import FirstSection from "../compenents/FirstSection";
import ProfessorsSection from "../compenents/ProfessorsSection";
import GraduatesSection from "../compenents/GraduatesSection";
import EvenetsSection from "../compenents/EvenetsSection";
import MobileAppDownloadSection from "../compenents/MobileAppDownloadSection";
import InscriptionguideSection from "../compenents/InscriptionguideSection";
import StatisticsSection from "../compenents/StatisticsSection";
import ProgramsSection from "../compenents/ProgramsSection";
import ContactSection from "../compenents/ContactSection";

export default function LandingPage() {
    return (
        <>
            {/* First section remains unchanged */}
            <FirstSection />

            {/* Updated Professors Section */}
            <ProfessorsSection />

            {/* Graduates Section */}
            <GraduatesSection />

            {/* Evenets Section */}
            <EvenetsSection />

            {/* Mobile App Download Section */}
            <MobileAppDownloadSection />


            {/* Inscription guide */}
            <InscriptionguideSection />

            {/* Statistics Section */}
            <StatisticsSection />


            {/* Programs Section */}
            <ProgramsSection />


            {/* Contact Section */}
            <ContactSection />
        </>
    );
}
