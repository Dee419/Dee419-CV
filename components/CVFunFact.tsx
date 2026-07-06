import React from "react";
import { useTranslation, Trans } from "next-i18next"; // Added Trans here

const CVFunFact: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
    const { t } = useTranslation();

    return (
        <div style={style}>
            <h3>{t("funFact.title")}</h3>
            <div>
                <p>
                    <Trans
                        i18nKey="funFact.description"
                        components={[
                            <strong key="0" />, // <0> NextJS
                            <strong key="1" />, // <1> React
                            <strong key="2" />, // <2> TailwindCSS
                            <strong key="3" />, // <3> i18next
                            <a
                                key="4"
                                href={`${t("contactDetails.gitHub")}/Dee419-CV`}
                                target="_blank"
                                rel="noopener noreferrer"
                            /> // <4> GitHub
                        ]}
                    />
                </p>
            </div>
        </div>
    );
};

export default CVFunFact;