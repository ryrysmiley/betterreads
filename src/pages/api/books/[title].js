import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
	//Find the absolute path of the json directory
	const jsonDirectory = path.join(process.cwd(), "json");
	//Read the json data file data.json
	const fileContents = JSON.parse(
		await fs.readFile(jsonDirectory + "/books.json", "utf8")
	);
	//filter the data to find the book with the title that matches the title in the url
	const book = fileContents.filter((book) => book.title === req.query.title);
	//Return the content of the data file in json format
	res.status(200).json(book);
}
