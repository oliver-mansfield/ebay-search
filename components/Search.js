import { useState } from "react";
import getProducts from "../util/getProducts";
import Product from "../components/Product";
import styles from "./Search.module.scss";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("garden");
	const [productData, setProductData] = useState({});

	const handleGetProductData = async (searchTerm) => {
		await getProducts(searchTerm).then((data) => {
			setProductData(data);
		});
	};

	const renderProducts = () => {
		if (productData.itemSummaries !== undefined) {
			return productData.itemSummaries.map((item, index) => {
				return <Product productData={item} key={index} />;
			});
		}
		if (productData.total === 0) {
			return (
				<p className={styles.error}>
					No products found for the search term "{searchTerm}". <br /> Try
					common searches such as "book" or "laptop".
				</p>
			);
		}
	};

	return (
		<div className={styles.page}>
			<p className={styles.page__intro}>
				Built by Oliver Mansfield, February 2022.
			</p>

			<div className={styles.search}>
				<h1 className={styles.search__title}>
					eBay
					<br />
					Product Search
				</h1>

				<form
					className={styles.search__form}
					onSubmit={(e) => {
						e.preventDefault();
						handleGetProductData(searchTerm);
					}}
				>
					<input
						className={styles.search__input}
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					></input>
					<button
						className={styles.search__button}
						onClick={() => {
							handleGetProductData(searchTerm);
						}}
					>
						Search
					</button>
				</form>
			</div>

			<div className={styles.productlist}>{renderProducts()}</div>
		</div>
	);
};

export default Search;
