import { ImMail2 } from "react-icons/im";

import Nav from "@comp/Nav";

const AboutUs = () => {
	return (
		<>
			<Nav />

			<main id="MainAboutUs">
				<h1>CAPELINE 974</h1>

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
					reiciendis deserunt aperiam cum cupiditate, ratione ab consequatur
					mollitia molestias dicta quasi. Recusandae, saepe totam est at
					dignissimos iure quisquam nemo, porro obcaecati vitae perferendis
					culpa commodi veritatis cupiditate illo earum impedit dolorum eius
					exercitationem minus iusto laborum vel sint esse.
				</p>

				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
					cupiditate ex quibusdam? Ipsam delectus magnam animi, iusto sunt quae
					quod alias possimus omnis. Similique in sequi voluptatibus
					dignissimos, aliquam cupiditate rem cum corporis autem? Sapiente amet
					totam natus modi animi voluptate voluptas quod optio, porro deleniti
					magnam quas corporis dicta.
				</p>

				<section>
					<a href="https://webrun.fr">
						<ImMail2 />

						<span>Adhérez à Capeline</span>
					</a>
				</section>
			</main>
		</>
	);
};

export default AboutUs;
