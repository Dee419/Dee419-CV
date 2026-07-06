import React from "react";
import {useTranslation} from "next-i18next";

const Education: React.FC<{ style?: React.CSSProperties, detailed?: boolean }> = ({ style, detailed }) => {
	const { t } = useTranslation();

	return (
		<div style={style}>
			<h3>{t("education.title")}</h3>
			<div style={{marginTop: '0.25em'}}>
				<i className="fa-solid fa-graduation-cap" style={{ fontSize: '1em', width: '1em', textAlign: 'center' }} />
				<a href="https://www.ucll.be/nl/bachelor/toegepaste-informatica" style={{ marginLeft: '0.5em', display: "inline" }}>
					{t("education.bachelorDegreeAppliedComputerScience.title")}
				</a>
				<p>
					{t("education.ucll")}
				</p>
				<p>
					{t("education.bachelorDegreeAppliedComputerScience.duration")}
				</p>
			</div>
			<div>
				<i className="fa-solid fa-graduation-cap" style={{ fontSize: '1em', width: '1em', textAlign: 'center' }} />
				<a href="https://www.ucll.be/nl/programmeren" style={{ marginLeft: '0.5em', display: "inline" }}>
					{t("education.associateDegreeProgramming.title")}
				</a>
				<p>
					{t("education.ucll")}
				</p>
				<p>
					{t("education.associateDegreeProgramming.duration")} | <i><b>{t("education.associateDegreeProgramming.honors")}</b></i>
				</p>
			</div>
			{detailed && (<>
				<div style={{marginTop: '0.25em'}}>
					<i className="fa-solid fa-school" style={{ fontSize: '1em', width: '1em', textAlign: 'center' }} />
					<a href="https://www.deringleuven.be/7de-jaar-bwv" style={{ marginLeft: '0.5em', display: "inline" }}>
						{t("education.seventhYearSchool.title")}
					</a>
					<p>
						{t("education.seventhYearSchool.description")}
					</p>
					<p>
						{t("education.seventhYearSchool.duration")}
					</p>
				</div>
				<div>
					<i className="fa-solid fa-school" style={{ fontSize: '1em', width: '1em', textAlign: 'center' }} />
					<a href="https://www.katervuren.be/" style={{ marginLeft: '0.5em', display: "inline" }}>
						{t("education.middelbareSchool.title")}
					</a>
					<p>
						{t("education.middelbareSchool.description")}
					</p>
					<p>
						{t("education.middelbareSchool.duration")}
					</p>
				</div>
			</>)}
		</div>
	)
}

export default Education;