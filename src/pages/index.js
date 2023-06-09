import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
	const { data, error } = useSWR("/api/books/", fetcher);
	//Handle the error state
	if (error) return <div>Failed to load</div>;
	//Handle the loading state
	if (!data) return <div>Loading...</div>;
	//Handle the ready state and display the result contained in the data object mapped to the structure of the json file
	return (
		<div className={styles.books}>
			<h2>Books</h2>
			<ul>
				{data.map((book) => (
					<li key={book.id}>
						<Link href={"/booktitle/" + book.title}>{book.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
