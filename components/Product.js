import styles from "./Product.module.scss";

const Product = ({ productData }) => {
	const renderImage = () => {
		if (productData.thumbnailImages !== undefined) {
			return (
				<img
					src={productData.thumbnailImages[0].imageUrl}
					className={styles.product__image}
				/>
			);
		}
	};

	return (
		<a
			href={productData.itemAffiliateWebUrl}
			target="_blank"
			className={styles.product}
		>
			<p className={styles.product__title}>{productData.title}</p>
			<p className={styles.product__price}>£{productData.price.value}</p>

			{renderImage()}
		</a>
	);
};

export default Product;
