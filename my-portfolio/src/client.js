import sanityClient, { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


export const client = createClient({
  projectId: import.meta.env.VITE_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-07-01",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: import.meta.env.VITE_APP_SANITY_TOKEN,

  // token:'sk6VnYmBzMtOj7kGJOZPLExFPTfFq27eH30gV6VuFB73ZSe8lP5S2YpBDTNyw69ECAzZlZ7H2HAa7Y0yCWCDUuSBWaLixZ6gWoI0VvzsiPorKNsWj5Zr9uQFWLVAqGaPRQu4gQvgEqlHJUv1Kon8gFO1mOg1GHm65XoABjmSYvI7YOBKlSVt'
  
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);