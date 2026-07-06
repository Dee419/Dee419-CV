import React from "react";
import { Trans, useTranslation } from "next-i18next";

const WorkExperience: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
	const { t } = useTranslation();

	return (
		<div style={style}>
			<h3>{t("workExperience.title")}</h3>
			<ul>
				<li>
					<Trans i18nKey="workExperience.coderdojo" t={t}>
						3 years volunteer mentor at <a href="https://coderdojobelgium.be/nl/">CoderDojo Leuven</a>
					</Trans>
				</li>
				<li>
					<Trans i18nKey="workExperience.internship" t={t}>
						3 months intern at <a href="https://strouwi.be/">Strouwi</a> in 2024
					</Trans>
				</li>
			</ul>
		</div>
	)
}

export default WorkExperience;