export interface CvData {
	cv: CvItem[]
	education: EducationItem[]
	headings: Headings
	skills: Skill[]
	work: WorkItem[]
}

export interface CvItem {
	id: string
}

export interface EducationItem {
	id: string
	startDate: string
	endDate?: string
	title: string
	school?: LinkInfo
	content?: string[]
	skills?: string[]
}

export interface Headings {
	at: string
	education: string
	in: string
	skills: string
	work: string
}

export interface LinkInfo {
	name: string
	location: string
	linkText: string
	linkUrl: string
}

export interface Skill {
	label: string
	slug: string
	usedIn: string[]
}

export interface WorkItem {
	id: string
	startDate: string
	endDate?: string
	title: string
	isInternship?: boolean
	internship?: string
	company?: LinkInfo
	content?: string[]
	skills?: string[]
}
