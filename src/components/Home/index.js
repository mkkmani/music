import Navbar from "../Navbar";
import Carousel from "../Carousel";
import "./index.css";

const Home = () => (
  <div className="home-container">
    <Navbar />
    <Carousel />
    <div>
      <div className="container">
        <h1>Welcome to Carnatic Music</h1>
        <div className="sections-images">
          <div className="sections">
            <div className="section">
              <h2>Ragas and Talas</h2>
              <p>
                <strong>Ragas:</strong> These are the cornerstone of Carnatic
                music, representing melodic structures with distinct ascending
                and descending patterns. Each raga evokes specific emotions and
                moods, often associated with particular times of the day or
                seasons.
              </p>
              <p>
                <strong>Talas:</strong> The rhythmic aspect of Carnatic music is
                governed by talas, intricate rhythmic cycles that underpin
                compositions. Talas provide a framework for intricate rhythmic
                improvisations and compositions.
              </p>
            </div>

            <div className="section">
              <h2>Musical Structure</h2>
              <p>
                <strong>Kritis and Varnams:</strong> Carnatic music compositions
                come in various forms, including kritis (devotional songs) and
                varnams (complex compositions with intricate melodic and
                rhythmic patterns).
              </p>
              <p>
                <strong>Alapanas and Neraval:</strong> Performances often
                involve alapanas (elaborate improvisations exploring the nuances
                of a raga) and neraval (repetition and elaboration of a specific
                line within a composition).
              </p>
            </div>

            <div className="section">
              <h2>Instruments</h2>
              <p>
                <strong>Vocal:</strong> Vocal music holds a paramount position
                in Carnatic music, with artists exhibiting intricate control
                over pitch, tone, and expression.
              </p>
              <p>
                <strong>Instrumental:</strong> Instruments like the veena,
                violin, flute, mridangam (percussion), ghatam, and kanjira
                complement vocal renditions, showcasing technical virtuosity and
                melodic prowess.
              </p>
            </div>

            <div className="section">
              <h2>Pedagogy and Tradition</h2>
              <p>
                <strong>Guru-Shishya Parampara:</strong> Carnatic music is
                traditionally passed down through an oral tradition, emphasizing
                the guru-shishya relationship, where knowledge is imparted from
                teacher to student.
              </p>
              <p>
                <strong>Concerts and Festivals:</strong> Performances take place
                in various settings, from intimate gatherings to grand concerts.
                Festivals like Tyagaraja Aradhana and Margazhi season in Chennai
                celebrate Carnatic music through concerts, lec-dems, and
                workshops.
              </p>
            </div>
          </div>
          <div className="images">
            <h1>Images section</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
