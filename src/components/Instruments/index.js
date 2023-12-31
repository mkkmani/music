import "./index.css";
import Navbar from "../Navbar";

const Instruments = () => (
  <div className="container">
    <Navbar />
    <div className="instruments-container">
      <h1 className="instruments-h1">Instruments</h1>
      <p className="h1-desc">
        In Carnatic music, a rich tapestry of instruments weaves together to
        create a vibrant and soulful symphony. Each instrument plays a unique
        role in embellishing the melodic and rhythmic aspects of this classical
        tradition.
      </p>
      <div className="instruments">
        <div className="instrument-card">
          <p>Veena</p>
          <div className="instrument-desc-img">
            <p>
              Veena: A plucked string instrument, the veena, comes in various
              forms like the Saraswati veena or the Rudra veena, producing
              resonant, nuanced tones.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Instruments;
