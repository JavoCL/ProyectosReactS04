import { Fragment } from "react/jsx-runtime";

interface CardBodyProps {
  title: string;
  text?: string;
}

function CardBody({ title, text }: CardBodyProps) {
  return (
    <Fragment>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </Fragment>
  );
}

export default CardBody;
