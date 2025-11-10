import { useEffect, useRef, useState } from 'react'
import MenuToggleButton from './MenuToggleButton'

interface MenuProps {
	onMenuToggle?: (isOpen: boolean) => void
}

function Menu({ onMenuToggle }: MenuProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)
	const toggleButtonRef = useRef<HTMLButtonElement | null>(null)

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

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node

			if (
				menuRef.current &&
				!menuRef.current.contains(target) &&
				toggleButtonRef.current &&
				!toggleButtonRef.current.contains(target)
			) {
				setIsMenuOpen(false)
				if (onMenuToggle) {
					onMenuToggle(false)
				}
			}
		}

		if (isMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isMenuOpen, onMenuToggle])

	return (
		<>
			<MenuToggleButton
				isMenuOpen={isMenuOpen}
				onToggle={toggleMenu}
				buttonRef={toggleButtonRef}
				ariaControlsId="main-menu"
			/>

			<div
				className={`menu${isMenuOpen ? ' open' : ''}`}
				ref={menuRef}
				id="main-menu"
			>
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
