const Search = () => {
	const getProducts = async () => {
		const url =
			"https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=drone&limit=3";
		const oauth = `Bearer ${process.env.EBAY_OAUTH}`;
		const headers = {
			Authorization: oauth,
			"Content-Type": "application/json",
			"X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
			"X-EBAY-C-ENDUSERCTX":
				"affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId></referenceId>",
		};

		const data = await fetch(url, {
			headers: headers,
		})
			.then((response) => response.json())
			.then((data) => console.log(data));
	};

	return (
		<>
			<h2>Search Component</h2>
			<p onClick={getProducts}>Search</p>
		</>
	);
};

export default Search;
