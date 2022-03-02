

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            For precious jewellery, Rani Jewellery in Calicut HO, Kozhikode is a
            recognised name in the city. With rich experience in the gems and
            jewellery business
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {' '}
                  <div className="testimonial-image">
                    {' '}
                    <img src={d.img} alt="" />{' '}
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  );
}
