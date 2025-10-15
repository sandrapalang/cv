import { useEffect, useState } from 'react'
import Accordion from '../components/Accordion'
import Chip from '../components/Chip'
import { data } from '../data/data'

function Cv() {
	const { headings, work, education, skills } = data

	const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

	const handleSkillClick = (slug: string) => {
		setSelectedSkill((prev) => (prev === slug ? null : slug))
	}

	useEffect(() => {
		const stored = localStorage.getItem('selectedSkill')
		if (stored) {
			setSelectedSkill(stored)
		}
	}, [])

	useEffect(() => {
		if (selectedSkill) {
			localStorage.setItem('selectedSkill', selectedSkill)
		} else {
			localStorage.removeItem('selectedSkill')
		}
	}, [selectedSkill])

	const skillsFor = (contextId: string) =>
		skills
			.filter((skill) => skill.usedIn.includes(contextId))
			.map((s) => s.label)

	const selectedSkills = skills.filter((skill) => skill.usedIn.includes('CV'))

	const highlightedIds = selectedSkill
		? (skills.find((s) => s.slug === selectedSkill)?.usedIn ?? [])
		: []

	return (
		<>
			<div className="cv-container">
				<div className="cv-title bb">
					<h2>{headings.work}</h2>
				</div>
				<div className="cv-content">
					{work.map((work) => (
						<Accordion
							key={work.id}
							startDate={work.startDate}
							endDate={work.endDate}
							title={work.title}
							isInternship={work.isInternship}
							internship={work.internship}
							atLabel={headings.at}
							company={work.company?.name}
							inLabel={headings.in}
							location={work.company?.location}
							content={work.content}
							skills={skillsFor(work.id)}
							isHighlighted={highlightedIds.includes(work.id)}
						/>
					))}
				</div>
			</div>

			<div className="cv-container">
				<div className="cv-title bb">
					<h2>{headings.education}</h2>
				</div>
				<div className="cv-content">
					{education.map((edu) => (
						<Accordion
							key={edu.id}
							startDate={edu.startDate}
							endDate={edu.endDate}
							title={edu.title}
							atLabel={headings.at}
							school={edu.school?.name}
							inLabel={headings.in}
							location={edu.school?.location}
							content={edu.content}
							skills={skillsFor(edu.id)}
							isHighlighted={highlightedIds.includes(edu.id)}
						/>
					))}
				</div>
			</div>

			<div className="cv-container">
				<div className="cv-title">
					<h2>{headings.skills}</h2>
				</div>
				<div className="cv-content">
					<div className="skills">
						{selectedSkills.map((skill) => (
							<Chip
								key={skill.slug}
								label={skill.label}
								clickable
								selected={selectedSkill === skill.slug}
								onClick={() => handleSkillClick(skill.slug)}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Cv
