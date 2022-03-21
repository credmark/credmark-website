import client from './sanity';

const postFields = `
"blogcategory": blogcategory->name,
title, 
subtitle,
"date": publishedAt,
"author": author->name,
"slug": slug.current,
"mainImage": mainImage.asset->url,
"content": body,
"border": borderBox,
`

export async function getAllPosts() {
   const results =  await client
   .fetch(`*[_type == "post"]| order(publishedAt desc) {${postFields}}`);
   return results;
}

export async function getBlogBySlug(slug) {
    const results = await client
    .fetch(`*[_type == "post" && slug.current == $slug] {
        ${postFields}
    }`, {slug})
    .then(res => res?.[0])

    return results;
}

export async function getAllMediaPosts() {
    const mediaPostFields = 
    `"category": category->,
    title, 
    subtitle,
    url,
    publishedAt,
    "mainImage": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    body,
    borderBox,
    "slug": slug.current`;
 
    const results =  await client
    .fetch(`*[_type == "mediaPost"]| order(publishedAt desc) {${mediaPostFields}}`);
    return results;
}
 