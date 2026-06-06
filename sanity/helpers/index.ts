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

export const getFourProducts = async () => {
  const FOUR_PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(name asc)[0...4]{
  _id,
  description,
  images,
  marque,
  reviewCount,
  slug,
  variants,
  }`);
  try {
    const products = await sanityFetch({
      query: FOUR_PRODUCTS_QUERY,
    });
    return products.data || [];
  } catch (error) {
    console.log("Error fetching all products:", error);
    return [];
  }
};


interface SimilarQueryProps{
  productId?: string;
  marque?: string[];
  pays?: string[];
  age?: string[];
}

export const getSimilarProducts = async ({
  age,
  marque,
  pays,
  productId,
}: SimilarQueryProps) => {
  const SIMILAR_PRODUCTS_QUERY = defineQuery(`
    *[
      _type == "product" &&
      _id != $productId &&
      (
        count((marque)[@ in $marque]) > 0 ||
        count((pays)[@ in $pays]) > 0 ||
        count((age)[@ in $age]) > 0
      )
    ][0...4]
  `);

  try {
    const products = await sanityFetch({
      query: SIMILAR_PRODUCTS_QUERY,
      params: {
        productId,
        marque: marque ?? [],
        pays: pays ?? [],
        age: age ?? [],
      },
    });

    return products.data ?? [];
  } catch (error) {
    console.error("Error fetching similar products:", error);
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
  *[_type == "order" && userId == $userId]
  | order(orderDate desc) {
    _id,
    orderNumber,
    stripeCheckoutSessionId,
    stripePaymentIntentId,
    stripeCustomerId,

    customerName,
    email,
    userId,

    totalPrice,
    currency,
    status,
    orderDate,

    phoneNumber,

    shippingAddress {
      name,
      line1,
      line2,
      city,
      postalCode,
      state,
      country
    },

    amountDiscount,

    products[] {
      _key,
      variantKey,
      flavor,
      taille,
      quantity,
      unitPrice,
      totalPrice,

      product->{
        _id,
        name,
        images,
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













function shuffle<T>(array: T[]): T[] {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}


