import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gold</h2>
          <p>
            Gold is one of the densest of all metals. It is a good conductor of
            heat and electricity. It is also soft and the most malleable and
            ductile of the elements; an ounce (28 grams) can be beaten out to
            187 square feet (about 17 square metres) in extremely thin sheets
            called gold leaf.
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
}
