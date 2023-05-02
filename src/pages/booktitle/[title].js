import styles from "@/styles/Home.module.css";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Book() {
	function getURL() {
		if (typeof window !== "undefined") {
			return window.location.href;
		}
		return "";
	}

	const url = getURL();
	const title = url.split("/").pop();

	const { data, error } = useSWR("/api/books/" + title, fetcher);
	//Handle the error state
	if (error) return <div>Failed to load</div>;
	//Handle the loading state
	if (!data) return <div>Loading...</div>;
	//Handle the ready state and display the result contained in the data object mapped to the structure of the json file
	console.log(data);
	return (
		<div>
			<Link href="/" className={styles.goback}>
				GO BACK
			</Link>
			<div className={styles.booktitle}>
				<h2>{data[0].title}</h2>
				<h4>By: {data[0].author}</h4>
				<h4>Published: {data[0].year}</h4>
				<h4>Pages: {data[0].pages}</h4>
				<h4>Country: {data[0].country}</h4>
				<h4>Language: {data[0].language}</h4>
				<h4>
					<a href={data[0].link}>More Info</a>
				</h4>
				<img src={data[0].imageLink} />
			</div>
		</div>
	);
}
