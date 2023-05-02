import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
	//Find the absolute path of the json directory
	const jsonDirectory = path.join(process.cwd(), "json");
	//Read the json data file data.json
	const fileContents = JSON.parse(
		await fs.readFile(jsonDirectory + "/books.json", "utf8")
	);
	//filter to get a specific author
	const author = fileContents.filter(
		(author) => author.name === req.query.name
	);
	//Return the content of the data file in json format
	res.status(200).json(author);
}
