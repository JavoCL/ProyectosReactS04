import CardBody from "./CardBody";

interface CardProps {
  title: string;
  text?: string;
}

function Card({ title, text }: CardProps) {
  const width = { width: "500px" };
  return (
    <div className="card" style={width}>
      <div className="card-body">
        <CardBody title={title} text={text} />
      </div>
    </div>
  );
}

export default Card;
