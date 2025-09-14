import React, { useEffect, useState, useRef } from 'react'

interface AccordionProps {
	startDate: string
	endDate?: string
	title: string
	company?: string
	school?: string
	content?: string[]
	skills?: string[]
}

const Accordion: React.FC<AccordionProps> = ({
	startDate,
	endDate,
	title,
	company,
	school,
	content,
	skills,
}) => {
	const contentRef = useRef<HTMLDivElement>(null)

	const [isOpen, setIsOpen] = useState(false)
	const [accordionHeight, setAccordionHeight] = useState('40px')

	useEffect(() => {
		if (isOpen && contentRef.current) {
			const contentHeight = contentRef.current.scrollHeight
			setAccordionHeight(`${40 + contentHeight}px`)
		} else {
			setAccordionHeight('40px')
		}
	}, [isOpen])

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div
			className={`accordion${isOpen ? ' open' : ''}`}
			role="button"
			aria-expanded={isOpen}
			tabIndex={0}
			style={{
				height: accordionHeight,
			}}
			onClick={handleToggle}
			onKeyDown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault()
					handleToggle()
				}
			}}
		>
			<div className="accordion-header">
				{(startDate || endDate) && (
					<div className="date">
						<h3>
							{startDate}
							{endDate ? ` - ${endDate}` : ''}
						</h3>
					</div>
				)}
				<h3 className="title">{title}</h3>
			</div>
			{isOpen && (
				<div className="accordion-content" ref={contentRef}>
					<div className="header">
						<p>
							på {company} {school}
						</p>
						<div className="content">
							{content?.map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
						<div className="skills">
							{skills?.map((skill, index) => (
								<p key={index} className="skill">
									{skill}
								</p>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Accordion
