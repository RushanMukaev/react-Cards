interface CardProps {
  children?: React.ReactNode;
  imgSrc?: string;
}

export default function Card({ imgSrc, children }: CardProps) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {imgSrc && <img src={imgSrc} className="card-img-top" alt="Card image" />}
      {children}
    </div>
  );
}
