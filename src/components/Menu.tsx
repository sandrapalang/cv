import { useState } from 'react'
import MenuToggleButton from './MenuToggleButton'

interface MenuProps {
	onMenuToggle?: (isOpen: boolean) => void
}

function Menu({ onMenuToggle }: MenuProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const now = new Date()

	const date = now.toLocaleDateString('sv-SE', {
		day: 'numeric',
		month: 'short',
		weekday: 'long',
	})

	const time = now.toLocaleTimeString('sv-SE', {
		hour: '2-digit',
		minute: '2-digit',
	})

	const toggleMenu = () => {
		const nextIsOpen = !isMenuOpen

		setIsMenuOpen(nextIsOpen)

		if (onMenuToggle) {
			onMenuToggle(nextIsOpen)
		}
	}

	return (
		<>
			<MenuToggleButton isMenuOpen={isMenuOpen} onToggle={toggleMenu} />

			<div className={`menu${isMenuOpen ? ' open' : ''}`} id="main-menu">
				<div className="menu-container">
					<div className="time-and-date">
						<div className="date">
							<h3>{date}</h3>
						</div>
						<div className="time">
							<h3>{time}</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Menu
