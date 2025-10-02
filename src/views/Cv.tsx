import Accordion from '../components/Accordion'
import { data } from '../data/data'

function Cv() {
	const { headings, work, education, skills } = data

	const skillsFor = (contextId: string) =>
		skills
			.filter((skill) => skill.usedIn.includes(contextId))
			.map((s) => s.label)

	return (
		<>
			<div className="cv-container">
				<div className="cv-title">
					<h2>{headings.work}</h2>
				</div>
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
						content={work.content}
						skills={skillsFor(work.id)}
					/>
				))}
			</div>

			<div className="cv-container">
				<div className="cv-title">
					<h2>{headings.education}</h2>
				</div>
				{education.map((edu) => (
					<Accordion
						key={edu.id}
						startDate={edu.startDate}
						endDate={edu.endDate}
						title={edu.title}
						atLabel={headings.at}
						company={edu.school?.name}
						content={edu.content}
						skills={skillsFor(edu.id)}
					/>
				))}
			</div>
		</>
	)
}

export default Cv
