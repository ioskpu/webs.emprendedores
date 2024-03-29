import { Header } from '@import/components'
import type { NextPage } from 'next'
import Link from 'next/link'

const Resume: NextPage = () => {
	return (
		<>
			<Header
				title='Luis Corales | Resume'
				canonical='/resume'
			/>
			<h1
				style={{
					display: 'none',
				}}>
				Resume
				<Link href='/'>LuisCorales</Link>
			</h1>
			<iframe
				style={{
					border: 'none',
					width: '100%',
					height: '100%',
					minHeight: '100vh',
				}}
				src='/resume.pdf'
			/>
		</>
	)
}

export default Resume
