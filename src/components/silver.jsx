import { Image } from './image';

export const Silver = (props) => {
  return (
    <div id="silver" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>SILVER</h2>
          <p>
            Silver is a chemical element with the symbol Ag (from the Latin
            argentum, derived from the Proto-Indo-European h₂erǵ: "shiny" or
            "white") and atomic number 47
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};
