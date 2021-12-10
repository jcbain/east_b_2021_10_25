import useDocumentTitle from "../hooks/useDocumentTitle";

const Title = () => {

  useDocumentTitle("A new and awesome title");

  return (
    <article>
      <h2>The Title Component</h2>
    </article>
  )
}

export default Title;