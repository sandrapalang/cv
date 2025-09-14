import Accordion from '../components/Accordion'

function Cv() {
	return (
		<>
			<div className="cv-container">
				<div className="cv-title">
					<h2>arbete</h2>
				</div>
				<Accordion
					startDate="VT 2025"
					title="Frontend-utvecklare Praktik"
					company="Stendahls"
					content={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
					]}
					skills={['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript']}
				/>
			</div>

			<div className="cv-container">
				<div className="cv-title">
					<h2>utbildning</h2>
				</div>
				<Accordion
					startDate="2023"
					endDate="2025"
					title="Frontend-utvecklare"
					school="IT-Högskolan"
					content={[
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
					]}
					skills={['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript']}
				/>
			</div>
		</>
	)
}

export default Cv
