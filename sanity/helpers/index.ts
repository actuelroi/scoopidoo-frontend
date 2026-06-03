import { defineQuery } from "next-sanity";
import { sanityFetch } from "../lib/live";

export const getAllProducts = async () => {
  const PRODUCTS_QUERY = defineQuery(`*[_type=="product"] | order(name asc)`);
  try {
    const products = await sanityFetch({
      query: PRODUCTS_QUERY,
    });
    return products.data || [];
  } catch (error) {
    console.log("Error fetching all products:", error);
    return [];
  }
};







export const getAllCategories = async (quantity?: number) => {
  const CATEGORIES_QUERY = `*[_type=="category"] | order(name asc)${quantity ? `[0...${quantity}]` : ""}`;

  try {
    const categories = await sanityFetch({
      query: CATEGORIES_QUERY,
    });
    return categories?.data || [];
  } catch (error) {
    console.error("Error fetching all categories:", error);
    return [];
  }
};

export const searchProductsByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(
    `*[_type == "product" && name match $searchParam] | order(name asc)`
  );

  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by name:", error);
    return [];
  }
};

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_ID_QUERY = defineQuery(
    `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`
  );

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: {
        slug,
      },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

export const getProductsByCategory = async (categorySlug: string) => {
  const PRODUCT_BY_CATEGORY_QUERY = defineQuery(
    `*[_type == 'product' && references(*[_type == "category" && slug.current == $categorySlug]._id)] | order(name asc)`
  );
  try {
    const products = await sanityFetch({
      query: PRODUCT_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Erroor fetching products by category:", error);
    return [];
  }
};

export const getSale = async () => {
  const SALE_QUERY = defineQuery(`*[_type == 'sale'] | order(name asc)`);
  try {
    const products = await sanityFetch({
      query: SALE_QUERY,
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
};








export const getMyOrders = async (userId: string) => {
  if (!userId) {
    throw new Error("User ID is required");
  }
  
  const MY_ORDERS_QUERY = defineQuery(`
    *[_type == "order" && clerkUserId == $userId] | order(orderDate desc) {
      _id,
      orderNumber,
      stripeCheckoutSessionId,
      stripeCustomerId,
      clerkUserId,
      customerName,
      email,
      totalPrice,
      currency,
      status,
      orderDate,
      shippingAddress {
        name,
        line1,
        line2,
        city,
        state,
        postal_code,
        country,
        phone
      },
      shippingMethod,
      shippingCost,
      amountDiscount,
      products[] {
        _key,
        quantity,
        selectedSize,
        selectedColor,
        selectedShoesSize,
        unitPrice,
        price,
        product->{
          _id,
          name,
          images,
          price,
          currency,
          slug
        }
      },
      invoice {
        id,
        number,
        hosted_invoice_url
      }
    }
  `);

  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });
    return orders?.data || [];
  } catch (error) {
    return [];
  }
};




/// added


export const getProductsByDay = async (day: string) => {
  const PRODUCTS_BY_DAY_QUERY = defineQuery(
    `*[_type == "product" && Day == $day] | order(name asc)`
  );

  try {
    const products = await sanityFetch({
      query: PRODUCTS_BY_DAY_QUERY,
      params: {
        day,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by day:", error);
    return [];
  }
};

export const getProductsBySeason = async (season: string) => {
  const PRODUCTS_BY_SEASON_QUERY = defineQuery(
    `*[_type == "product" && Saison == $season] | order(name asc)`
  );

  try {
    const products = await sanityFetch({
      query: PRODUCTS_BY_SEASON_QUERY,
      params: {
        season,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by season:", error);
    return [];
  }
};

export const getProductsByDayAndSeason = async (day: string, season: string) => {
  const PRODUCTS_BY_DAY_AND_SEASON_QUERY = defineQuery(
    `*[_type == "product" && Day == $day && Saison == $season] | order(name asc)`
  );

  try {
    const products = await sanityFetch({
      query: PRODUCTS_BY_DAY_AND_SEASON_QUERY,
      params: {
        day,
        season,
      },
    });
    return products?.data || [];
  } catch (error) {
    console.error("Error fetching products by day and season:", error);
    return [];
  }
};