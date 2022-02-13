import debugJson from "./debugJson";

const getProducts = async (searchTerm) => {
	const url = `https://api.sandbox.ebay.com/buy/browse/v1/item_summary/search?q=${searchTerm}&limit=6`;
	const oauth = `Bearer ${process.env.EBAY_OAUTH}`;
	const headers = {
		Authorization: oauth,
		"Content-Type": "application/json",
		"X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
		"X-EBAY-C-ENDUSERCTX":
			"affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId></referenceId>",
	};

	return fetch(url, {
		headers: headers,
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				console.log("error");
				return debugJson;
			}
		})
		.then((responseJson) => {
			return responseJson;
		});
};

export default getProducts;
