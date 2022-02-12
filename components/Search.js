import { useState } from "react";
import getProducts from "../util/getProducts";
import ResultItem from "../components/ResultItem";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("drone");
	const [productData, setProductData] = useState();

	const handleGetProductData = async (searchTerm) => {
		await getProducts(searchTerm).then((data) => {
			setProductData(data);
		});
	};

	const renderProducts = () => {
		if (productData !== undefined) {
			return productData.itemSummaries.map((item) => {
				return <ResultItem productData={item} />;
			});
		} else {
			return <p>Loading...</p>;
		}
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

			{renderProducts()}

			{/* {productData !== undefined ? <ResultItem /> : <p>Loading...</p>} */}
		</>
	);
};

export default Search;
