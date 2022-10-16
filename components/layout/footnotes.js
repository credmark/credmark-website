import React from "react";
import PortableText from "@sanity/block-content-to-react";

const serializers = {
    types: {
        code: (serializer) => {
            return <h1>Code Block</h1>
        }
    }
}

function Footnotes({ blocks }) {
  const notes = blocks
    // filter out everything that's not a text block
    .filter(({ _type }) => _type === "block")
    // make an array of the mark definitions of those blocks
    .reduce((acc, curr) => {
      return [...acc, ...curr.markDefs];
    }, [])
    // find all the footnote mark definitions
    .filter(({ _type }) => _type === "footnote");

  return (
    <ol>
      {notes.map(({ _key, text }) => (
        // the _key is what markKey refers to in the main text component
        <li id={`${_key}`} key={_key}>
          <PortableText blocks={text} />
        </li>
      ))}
    </ol>
  );
}

export default Footnotes;
