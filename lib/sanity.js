import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: "9y1au457", // you can find this in sanity.json
    dataset: "production",
    apiVersion: "2021-09-07", // or the name you chose in step 1
    useCdn: false, // `false` if you want to ensure fresh data
  });

