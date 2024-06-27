import axios from "axios"
import {useEffect, useState} from "react"

async function check() {
	try {
		const res = await axios.get('https://hs.vtolvr.live/api/v1/public/online')
		if (res.status === 200) {
			return res
		} else {
			throw new Error(`API request failed with status: ${res.status}`)
		}
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

export default function Onlineboard() {
	const [users, setUsers] = useState(0)

	check().then(res => {
		setUsers(res.data.length - 1)
	})

	return (
		<div>
			<div>
				<p>Users Online:</p>
				<div>
					<p>{users}/16</p>
					<svg></svg>
				</div>
			</div>
			<div>
				<div>
					<p></p>
					<div>
						<p></p>
						<p></p>
					</div>
					//TODO repeating divs
				</div>
				<div>
					<p></p>
					<div>
						<p></p>
						<p></p>
					</div>
					//TODO repeating divs
				</div>
			</div>
			<div>
				<div>
					<p></p>
					<div></div>
				</div>
				<p></p>
			</div>
		</div>
	)
}