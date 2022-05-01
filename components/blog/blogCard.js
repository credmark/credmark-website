import * as React from 'react';
import Link from 'next/link';

const BlogCard = (props) => {
    return (
        <>
                <div className="box col-xs transform hover:scale-105">
                    <Link href={`/blog/${props.slug}`}>
                        <img
                            alt={props.alt}
                            src={props.img}
                            className='object-cover	w-full h-52 flex justify-center cursor-pointer rounded-t-md'
                            
                        />
                    </Link>
                    <div className="px-5 font-light pb-3 bg-white shadow-md rounded-b-md">
                        <p className="text-xs text-black font-bold pt-6">{props.date}</p>
                        <Link href={`/blog/${props.slug}`}>
                        <p className="cursor-pointer text-black text-3xl font-medium pb-2">{props.title}</p>
                        </Link>
                        <p className="cursor-pointer text-black text-sm flex pb-6">{props.author}</p>
                    </div>
                </div>
        </>
    );
}

export default BlogCard;
