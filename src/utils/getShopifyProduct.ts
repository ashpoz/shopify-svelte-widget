const headers = new Headers();
const storefrontURL = "https://adrian-test-store-9181.myshopify.com";

headers.append("X-Shopify-Access-Token", `${process.env.SHOPIFY_ACCESS_TOKEN}`);
headers.append("Content-Type", "application/json");

export async function getShopifyProduct(productId) {
  try {
    const response = await fetch(
      `${storefrontURL}/admin/api/2023-01/products/${productId}.json`,
      {
        method: "GET",
        headers: headers,
        redirect: "follow",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the API request:", error);
  }
}
