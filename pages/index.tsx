import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { Contact, Header, Navbar, Portfolio, Skills } from '@import/components'
import { Emprendedores } from '@import/image'
import { InterestData } from '@import/data'

const Home: NextPage = () => {
	useEffect(() => {
		navigator.onLine
			? toast.success('Estas conectado!')
			: toast.error('¡Estas desconectado!', { autoClose: false })
	})

	return (
		<>
			<Header canonical='/' />
			<Navbar />
			<section
				id='about'
				className='about'>
				<div className='about-me container'>
					<div
						className='section-title'
						data-aos='fade-right'>
						<h2>Acerca de</h2>
						<p>Aprende más sobre mí</p>
					</div>

					<div className='row'>
						<div
							className='col-lg-4'
							data-aos='fade-right'>
							<Image
								src={Emprendedores}
								className='img-fluid'
								alt='Emprendedores'
							/>
						</div>
						<div
							className='col-lg-8 pt-4 pt-lg-0 content'
							data-aos='fade-left'>
							<h3>Freelance &amp; Full Stack Developer</h3>
							<p className='fst-italic'>
								Soy un emprendedor y Full Stack Developer.
								Apasionado por la tecnologia, me encanta la programacion.
								Trabajando siempre para mejorar mis habilidades.
								<br />
								Mi experiencia en el mundo de la programacion, siempre me ha
								llevado a crear cosas increibles, aprender y compartir.
							</p>
							<div className='row'>
								<div className='col-lg-6 mt-2'>
									<ul>
										<li>
											<i className='bi bi-chevron-right'></i>{' '}
											<strong>Cumpleaños:</strong> <span>27 May 1974</span>
										</li>
									</ul>
								</div>
								<div className='col-lg-6 mt-2'>
									<ul>
										<li>
											<i className='bi bi-chevron-right'></i>{' '}
											<strong>Email:</strong>{' '}
											<span>
												<Link href='mailto:webs.emprendedores@gmail.com'>
												webs.emprendedores@gmail.com
												</Link>
											</span>
										</li>
									</ul>
								</div>
								<div className='col-lg-6 mt-2'>
									<ul>
										<li>
											<i className='bi bi-chevron-right'></i>{' '}
											<strong>Freelance:</strong>{' '}
											<span>
												Disponible (
												<Link
													href='/resume'
													className='resume-lightbox'>
													Ver CV
												</Link>
												)
											</span>
										</li>
									</ul>
								</div>
								<div className='col-lg-6 mt-2'>
									<ul>
										<li>
											<i className='bi bi-chevron-right'></i>{' '}
											<strong>Website:</strong>{' '}
											<span>
												<Link href='/'>webs-emprendedores.vercel.app</Link>
											</span>
										</li>
									</ul>
								</div>
								<div className='col-lg-12 mt-2'>
									<ul>
										<li>
											<i className='bi bi-chevron-right'></i>{' '}
											<strong>Grado:</strong>{' '}
											<span>
												Técnico Superior Universitario en Análisis de Sistemas
											</span>
										</li>
									</ul>
								</div>
								<div className='col-lg-12 mt-2'>
									<ul>
										<li>
											<i className='bi bi-chevron-right'></i>{' '}
											<strong>Institución:</strong>{' '}
											<span>
												Instituto Universitario de Tecnología Isaac Newton
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Skills />
				<div className='interests container'>
					<div
						className='section-title'
						data-aos='fade-right'>
						<h2>Intereses</h2>
					</div>

					<div className='row'>
						{InterestData.map(interest => (
							<div
								className='col-lg-3 mt-4'
								data-aos='fade-up'
								key={interest.id}>
								<div
									className='icon-box'
									data-aos='flip-left'>
									<i
										className={interest.icon}
										style={{ color: interest.color }}></i>
									<h3>{interest.name}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<Portfolio />
			<Contact />
		</>
	)
}

export default Home
