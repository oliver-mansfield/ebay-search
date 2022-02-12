import { useState } from "react";
import getProducts from "../util/getProducts";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("drone");
	const [productData, setProductData] = useState({});

	const handleGetProductData = async (searchTerm) => {
		await getProducts(searchTerm).then((data) => {
			setProductData(data);
		});
	};

	return (
		<>
			<h2>Search Component</h2>
			<input
				type="text"
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			></input>
			<p
				onClick={() => {
					handleGetProductData(searchTerm);
				}}
			>
				Search
			</p>
		</>
	);
};

export default Search;
