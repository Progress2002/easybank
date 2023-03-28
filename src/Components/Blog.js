import { articleData } from "./Data";
import Card from "./Card";
// import { Reveal } from "react-reveal";

function Blog() {
  return (
    <article
      className="text-center px-5 md:container text-4xl text-DarkBlue leading-tight mb-5 py-20"
      id="blog">
      {/* <Reveal top> */}
        <h2 className="text-center md:text-left mb-10 md:mb-7 font-normal">
          Latest Articles
        </h2>
      {/* </Reveal> */}
      <ul className="text-left flex flex-col md:flex md:flex-row gap-7 md:gap-5">
        {articleData.map((data) => {
          const { id, imgUrl, author, title, summary, alt } = data;
          return (
            // <Reveal key={id} up>
              <Card
                key={id}
                imgUrl={imgUrl}
                author={author}
                title={title}
                summary={summary}
                alt={alt}
              />
            // </Reveal>
          );
        })}
      </ul>
    </article>
  );
}

export default Blog;
