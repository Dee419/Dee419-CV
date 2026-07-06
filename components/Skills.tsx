import React from "react";
import { useTranslation } from "next-i18next";

const Skills: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
	const { t } = useTranslation();

	// Define the sections we want to render
	const skillCategories = ['strong', 'advanced', 'basic'] as const;

	return (
		<div style={style}>
			<h3>{t('skills.title')}</h3>

			{skillCategories.map((category) => {
				// Retrieve the array from JSON. We cast as string[] because i18next returns 'any' or 'object'
				const items = t(`skills.${category}.items`, { returnObjects: true }) as string[];
				const title = t(`skills.${category}.title`);

				return (
					<div key={category} style={{ marginBottom: '1em' }}>
						<h4>{title}</h4>
						<div className="skill-list" style={{ display: 'flex', columnGap: '0.5em', rowGap: 0, flexWrap: 'wrap' }}>
							{items.map((skill, index) => (
								<p key={index}>
									{skill}{index < items.length - 1 ? ',' : ''}
								</p>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Skills;