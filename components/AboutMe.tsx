import React from "react";
import {useTranslation} from "next-i18next";

const AboutMe: React.FC< { style?: React.CSSProperties }> = ({ style }) => {
    const {t} = useTranslation();

    return (
        <div style={style}>
            <h3>{t("aboutMe.title")}</h3>
            <p>{t("aboutMe.description")}</p>
        </div>
    );
}

export default AboutMe;