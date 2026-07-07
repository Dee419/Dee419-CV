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
                            <code key="0" className="font-bold"/>, // <0> NextJS
                            <code key="1" className="font-bold"/>, // <1> React
                            <code key="2" className="font-bold"/>, // <2> TailwindCSS
                            <code key="3" className="font-bold"/>, // <3> i18next
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