import styles from "../styles/Home.module.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
	const { data, error } = useSWR("/api/authors/", fetcher);
	//Handle the error state
	if (error) return <div>Failed to load</div>;
	//Handle the loading state
	if (!data) return <div>Loading...</div>;
	//Handle the ready state and display the result contained in the data object mapped to the structure of the json file
	console.log(data);
	return (
		<div className={styles.authors}>
			<h2>Authors</h2>
			<ul>
				{data.map((author, id) => (
					<li key={id}>
						<a>{author}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
