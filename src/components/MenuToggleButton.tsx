import { useEffect, useRef, useState } from 'react'
import MenuToggleIcon from '../icons/MenuToggleIcon'
import type { AnimationDirection } from '../icons/MenuToggleIcon'

type MenuToggleButtonProps = {
	isMenuOpen: boolean
	onToggle: () => void
	ariaControlsId?: string
	buttonRef?: React.RefObject<HTMLButtonElement | null>
}

const MenuToggleButton = ({
	isMenuOpen,
	onToggle,
	ariaControlsId,
	buttonRef,
}: MenuToggleButtonProps) => {
	const [animationDirection, setAnimationDirection] =
		useState<AnimationDirection>('idle')
	const previousIsMenuOpen = useRef(isMenuOpen)

	const handleAnimationEnd = () => {
		setAnimationDirection('idle')
	}

	const handleClick = () => {
		if (animationDirection !== 'idle') return

		const nextIsOpen = !isMenuOpen
		setAnimationDirection(nextIsOpen ? 'openToClose' : 'closeToOpen')
		onToggle()
	}

	useEffect(() => {
		if (previousIsMenuOpen.current === isMenuOpen) {
			return
		}

		if (animationDirection !== 'idle') {
			previousIsMenuOpen.current = isMenuOpen
			return
		}

		if (!previousIsMenuOpen.current && isMenuOpen) {
			setAnimationDirection('openToClose')
		} else if (previousIsMenuOpen.current && !isMenuOpen) {
			setAnimationDirection('closeToOpen')
		}

		previousIsMenuOpen.current = isMenuOpen
	}, [isMenuOpen, animationDirection])

	return (
		<button
			className="menu-toggle-button"
			ref={buttonRef}
			type="button"
			aria-controls={ariaControlsId}
			aria-expanded={isMenuOpen}
			aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
			onClick={handleClick}
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
