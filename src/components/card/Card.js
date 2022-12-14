import "./Card.css";

export default function Card({ question, answer, tag_1, tag_2, tag_3 }) {
  return (
    <section className="card">
      <h2>{question}</h2>
      <button className="card__button-answer" type="button">
        Show answer
      </button>
      <p className="card__answer card__answer--active">{answer}</p>
      <ul className="card__tag-list">
        <li className="card__tag-list-item">{tag_1}</li>
        <li className="card__tag-list-item">{tag_2}</li>
        <li className="card__tag-list-item">{tag_3}</li>
      </ul>
      <div className="card__button-bookmark">
        <button className="card__bookmark" aria-label="bookmark" type="button">
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
      </div>
    </section>
  );
}
