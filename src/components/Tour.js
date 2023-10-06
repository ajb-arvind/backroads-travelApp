function Tour({
  id,
  img,
  tourDate,
  tourName,
  tourDetails,
  country,
  days,
  price,
}) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={tourName} />
        <p className="tour-date">{tourDate}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tourName}</h4>
        </div>
        <p>{tourDetails}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{' '}
            {country}
          </p>
          <p>{days} days</p>
          <p>From ${price}</p>
        </div>
      </div>
    </article>
  );
}
export default Tour;
