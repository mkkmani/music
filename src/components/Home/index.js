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

        <div className="sections">
          <div className="section">
            <h2>Ragas and Talas</h2>
            <div className="section-content-images">
              <div className="section-content">
                <p>
                  <strong>Ragas:</strong> These are the cornerstone of Carnatic
                  music, representing melodic structures with distinct ascending
                  and descending patterns. Each raga evokes specific emotions
                  and moods, often associated with particular times of the day
                  or seasons.
                </p>
                <p>
                  <strong>Talas:</strong> The rhythmic aspect of Carnatic music
                  is governed by talas, intricate rhythmic cycles that underpin
                  compositions. Talas provide a framework for intricate rhythmic
                  improvisations and compositions.
                </p>
              </div>
              <div className="section-images">
                <img
                  src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704019451/ai%20images/_bb019752-2427-4e6b-ab7a-399316e287c8_gtiur3.jpg"
                  alt="instruments"
                  className="section-images-img"
                />
                <img
                  src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704019450/ai%20images/_54f96b5e-95e1-4e8c-9cb2-914c351d012c_y7yqui.jpg"
                  alt="instruments"
                  className="section-images-img"
                />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Musical Structure</h2>
            <div className="section-content-images">
              <div className="section-content">
                <p>
                  <strong>Kritis and Varnams:</strong> Carnatic music
                  compositions come in various forms, including kritis
                  (devotional songs) and varnams (complex compositions with
                  intricate melodic and rhythmic patterns).
                </p>
                <p>
                  <strong>Alapanas and Neraval:</strong> Performances often
                  involve alapanas (elaborate improvisations exploring the
                  nuances of a raga) and neraval (repetition and elaboration of
                  a specific line within a composition).
                </p>
              </div>
              <div className="section-images">
                <img
                  src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704019451/ai%20images/_593db6aa-aaaf-43c0-a41a-3539912e228e_wq49x4.jpg"
                  alt="instruments"
                  className="section-images-img"
                />
                <img
                  src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704019450/ai%20images/_0407f3c0-937c-48d7-813c-42be5e1c5179_qesqby.jpg"
                  alt="instruments"
                  className="section-images-img"
                />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Instruments</h2>
            <div className="section-content-images">
              <div className="section-content">
                <p>
                  <strong>Vocal:</strong> Vocal music holds a paramount position
                  in Carnatic music, with artists exhibiting intricate control
                  over pitch, tone, and expression.
                </p>
                <p>
                  <strong>Instrumental:</strong> Instruments like the veena,
                  violin, flute, mridangam (percussion), ghatam, and kanjira
                  complement vocal renditions, showcasing technical virtuosity
                  and melodic prowess.
                </p>
              </div>
              <div className="section-images">
                <img
                  src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704017064/ai%20images/_ccc6a7af-071f-4d96-8e2d-1218ebcffe3d_xrxysn.jpg"
                  alt="instruments"
                  className="section-images-img"
                />
                <img
                  src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704017063/ai%20images/_9c8f999b-02a2-4242-bb85-7f73bec9e6ed_nasksv.jpg"
                  alt="instruments"
                  className="section-images-img"
                />
              </div>
            </div>
          </div>

          <div className="section">
            <h2>Pedagogy and Tradition</h2>
            <div className="section-content-images">
              <div className="section-content">
                <p>
                  <strong>Guru-Shishya Parampara:</strong> Carnatic music is
                  traditionally passed down through an oral tradition,
                  emphasizing the guru-shishya relationship, where knowledge is
                  imparted from teacher to student.
                </p>
                <p>
                  <strong>Concerts and Festivals:</strong> Performances take
                  place in various settings, from intimate gatherings to grand
                  concerts. Festivals like Tyagaraja Aradhana and Margazhi
                  season in Chennai celebrate Carnatic music through concerts,
                  lec-dems, and workshops.
                </p>
              </div>
              <div className="section-images">
                <img
                  src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704017064/ai%20images/_fea856e0-0a67-452b-8e7e-c347ae97b196_g2haic.jpg"
                  alt="guru sishya"
                  className="section-images-img"
                />
                <img
                  src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704017064/ai%20images/_c1970a9a-3f9c-4592-866e-3166e12d937b_kicdii.jpg"
                  alt="guru shishya"
                  className="section-images-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
