function ServiceCard({ image, title, text }) {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default ServiceCard;
