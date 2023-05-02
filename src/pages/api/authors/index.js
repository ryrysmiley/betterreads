import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
	//Find the absolute path of the json directory
	const jsonDirectory = path.join(process.cwd(), "json");
	//Read the json data file data.json
	const fileContents = JSON.parse(
		await fs.readFile(jsonDirectory + "/books.json", "utf8")
	);
	//filter the data to have unique names
	const uniqueAuthors = [...new Set(fileContents.map((book) => book.author))];
	//Return the content of the data file in json format
	res.status(200).json(uniqueAuthors);
}
