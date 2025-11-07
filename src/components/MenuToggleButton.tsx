import React from 'react'
import MenuToggleIcon from '../icons/MenuToggleIcon'
import type { AnimationDirection } from '../icons/MenuToggleIcon'

type MenuToggleButtonProps = {
	isMenuOpen: boolean
	onToggle: () => void
	ariaControlsId?: string
	buttonRef?: React.RefObject<HTMLButtonElement | null>
}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
	isMenuOpen,
	onToggle,
	ariaControlsId,
	buttonRef,
}) => {
	const [animationDirection, setAnimationDirection] =
		React.useState<AnimationDirection>('idle')

	const handleClick = () => {
		if (animationDirection !== 'idle') return

		const nextIsOpen = !isMenuOpen
		setAnimationDirection(nextIsOpen ? 'openToClose' : 'closeToOpen')
		onToggle()
	}

	const handleAnimationEnd = () => {
		setAnimationDirection('idle')
	}

	return (
		<button
			ref={buttonRef}
			type="button"
			className="menu-toggle-button"
			onClick={handleClick}
			aria-controls={ariaControlsId}
			aria-expanded={isMenuOpen}
			aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
		>
			<MenuToggleIcon
				animationDirection={animationDirection}
				isMenuOpen={isMenuOpen}
				onAnimationEnd={handleAnimationEnd}
			/>
		</button>
	)
}

export default MenuToggleButton
