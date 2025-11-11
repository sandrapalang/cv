import { useEffect, useState } from 'react'
import Accordion from '../components/Accordion'
import Chip from '../components/Chip'
import Menu from '../components/Menu'
import { data } from '../data/data'

function Cv() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

	const { about, headings, work, education, skills } = data

	const highlightedIds = selectedSkill
		? (skills.find((skill) => skill.slug === selectedSkill)?.usedIn ?? [])
		: []

	const selectedSkills = skills.filter((skill) => skill.usedIn.includes('CV'))

	const skillsFor = (contextId: string) =>
		skills
			.filter((skill) => skill.usedIn.includes(contextId))
			.map((s) => s.label)

	const handleMenuToggle = (isOpen: boolean) => setIsMenuOpen(isOpen)

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

	return (
		<div className={`cv${isMenuOpen ? ' menu-open' : ''}`}>
			<header>
				<div className="header-container">
					<Menu onMenuToggle={handleMenuToggle} />
				</div>
			</header>
			<main>
				<div className="sections">
					<div className="section">
						<div className="section-container">
							<div className="cv-signature">
								<h1>{about && `${about[0].firstname} ${about[0].lastname}`}</h1>
							</div>
							<div className="section-content">
								<div className="cv-summary">
									<p>{about && about[0].summary}</p>
								</div>
							</div>
						</div>
					</div>

					<div className="section">
						<div className="section-container">
							<div className="section-title">
								<h2>{headings.work}</h2>
							</div>
							<div className="section-divider" aria-hidden="true" />
							<div className="section-content">
								{work.map((work) => (
									<Accordion
										key={work.id}
										startDate={work.startDate}
										endDate={work.endDate}
										title={work.title}
										internship={work.internship}
										isInternship={work.isInternship}
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
					</div>

					<div className="section">
						<div className="section-container">
							<div className="section-title">
								<h2>{headings.education}</h2>
							</div>
							<div className="section-divider" aria-hidden="true" />
							<div className="section-content">
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
					</div>

					<div className="section">
						<div className="section-container">
							<div className="section-title">
								<h2>{headings.skills}</h2>
							</div>
							<div className="section-divider desktop" aria-hidden="true" />
							<div className="section-content">
								<div className="skills">
									{selectedSkills.map((skill) => (
										<Chip
											key={skill.slug}
											label={skill.label}
											clickable
											onClick={() => handleSkillClick(skill.slug)}
											selected={selectedSkill === skill.slug}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Cv
