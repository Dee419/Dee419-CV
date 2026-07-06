import React from "react";
import {useTranslation} from "next-i18next";
import {useReactToPrint} from "react-to-print";
import Head from "next/head";
import ContactDetails from "@/components/ContactDetails";
import Education from "@/components/Education";
import Languages from "@/components/Languages";
import AboutMe from "@/components/AboutMe";
import WorkExperience from "@/components/WorkExperience";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Student: React.FC = () => {
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language;

    const contentRef = React.useRef<HTMLDivElement>(null);
    const reactToPrint = useReactToPrint({contentRef, documentTitle: `${t("document.name")}_STUDENT_${currentLanguage.toUpperCase()}`});

    React.useEffect(() => {
        if (contentRef.current) {
            reactToPrint();
        }
    }, [reactToPrint]);

    return (
        <>
            <Head>
                <title>CV Student</title>
            </Head>
            <main
                style={{
                    margin: '2em'
                }}
                ref={contentRef}
            >
                <h1>{t("title.fullName")}</h1>
                <hr style={{ borderColor: '#4472C4' }} />
                <h2>{t("title.subTitle")}</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '0.5em',
                        marginTop: '2em',
                        alignItems: 'stretch'
                    }}
                >
                    <div style={{ flex: 1, width: '50%' }}>
                        <ContactDetails />
                        <Education style={{ marginTop: '1em' }} detailed />
                    </div>
                    <div
                        style={{
                            width: '1px',
                            background: '#4472C4',
                            margin: '0 1em',
                            borderRadius: '1px'
                        }}
                    />
                    <div style={{ flex: 1, width: '50%' }}>
                        <AboutMe />
                        <WorkExperience style={{ marginTop: '1em' }} />
                        <Languages style={{ marginTop: '1em' }} />
                    </div>
                </div>
            </main>
            <script src="https://kit.fontawesome.com/38d9b77779.js" crossOrigin="anonymous" />
        </>
    )
}

export const getServerSideProps = async (context: any) => {
    const {locale} = context;
    return{
        props: {
            ...(await serverSideTranslations(locale ?? "en", ["common"])),
        },
    };
}

export default Student;