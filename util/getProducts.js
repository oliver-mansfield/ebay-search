const getProducts = async (searchTerm) => {
	const url = `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=${searchTerm}&limit=3`;
	const oauth = `Bearer ${process.env.EBAY_OAUTH}`;
	const headers = {
		Authorization: oauth,
		"Content-Type": "application/json",
		"X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
		"X-EBAY-C-ENDUSERCTX":
			"affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId></referenceId>",
	};

	return await fetch(url, {
		headers: headers,
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			return data;
		});
};

export default getProducts;
