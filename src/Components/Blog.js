import { articleData } from "./Data";
import Card from "./Card";

function Blog() {
  return (
    <article className='text-center px-5 md:container text-4xl text-DarkBlue leading-tight mb-5 py-20' id="blog">
      <h2 className="text-center md:text-left mb-10 md:mb-7">Latest Articles</h2>
      <ul className='text-left flex flex-col md:flex md:flex-row gap-7 md:gap-5'>
        {
          articleData.map(data => {
            const {id, imgUrl, author, title, summary, alt} = data;
            return <Card key={id} imgUrl={imgUrl} author={author} title={title} summary={summary}/>
          })
        }
      </ul>
    </article>
  )
}

export default Blog