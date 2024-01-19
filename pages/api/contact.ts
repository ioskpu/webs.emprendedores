import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'

const Contact = async (req: NextApiRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'POST': {
			const { name, email, subject, message } = req.body
			const mailer = createTransport({
				service: 'gmail',
				auth: {
					user: process.env.USER!,
					pass: process.env.PASS!,
				},
			})
			try {
				await mailer.sendMail({
					from: `Admin Contact From <webs.emprendedores@gmail.com>`,
					replyTo: `${name} <${email}>`,
					to: 'webs.emprendedores@gmail.com',
					subject: `${name} (${email}) sent you a message`,
					html: `<b>Asunto:</b> ${subject}<br /><br /><b>Mensaje:</b> ${message}`,
				})
				return res.status(200).json({ message: 'Mensaje enviado con éxito.' })
			} catch (error) {
				return res.status(500).json({
					message: 'Error al enviar el mensaje.Por favor, inténtelo de nuevo más tarde.',
				})
			}
		}
	}
}

export default Contact
