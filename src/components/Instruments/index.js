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
          <p>
            <strong className="instrument-name">Veena</strong>
          </p>
          <div className="instrument-desc-img">
            <p className="instrument-desc">
              The veena is a traditional Indian stringed instrument that holds a
              significant place in classical music. It's an ancient instrument,
              dating back to around 1500 BCE, and comes in various forms, the
              most prominent being the Saraswati veena and the Rudra veena.
              Typically made from wood, it has a long, hollow body with a
              resonator at the bottom and a neck with strings running across the
              entire length. The main melody strings are played with one hand
              while the other hand manipulates additional strings to produce
              different notes and embellishments. The veena's rich, resonant
              sound and its ability to evoke emotions make it a cherished
              instrument in Indian classical music.
              <span className="wiki-link">
                For more information click
                <a href="https://en.wikipedia.org/wiki/Veena" target="_blank">
                  here
                </a>
              </span>
            </p>
            <div className="instrument-img-container">
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041791/ai%20images/_b51bb7b3-fb5d-4da7-8a81-b06f21b8c6d0_nextxq.jpg"
                alt="veena"
                className="instrument-img"
              />
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041793/ai%20images/wp4134085-veena-wallpapers_tcxzbj.jpg"
                alt="veena"
                className="instrument-img"
              />
            </div>
          </div>
        </div>

        <div className="instrument-card">
          <p>
            <strong className="instrument-name">Violin</strong>
          </p>
          <div className="instrument-desc-img">
            <p className="instrument-desc">
              The violin is a prominent and versatile string instrument with a
              history dating back several centuries. It features four strings
              stretched over a hollow, wooden body, typically made from maple
              and spruce. Musicians use a bow, usually made of horsehair, to
              create sound by stroking or "bowing" the strings. Alternatively,
              they can pluck the strings with their fingers, a technique known
              as "pizzicato." The violin's range and expressive capabilities
              have made it a cornerstone in various music genres, including
              classical, folk, jazz, and contemporary styles. Its ability to
              convey a wide range of emotions, from melancholy to exuberance,
              contributes to its enduring popularity. Mastering the violin
              requires intricate finger placement on the fingerboard to produce
              different pitches, as well as an understanding of bowing
              techniques to control dynamics and articulation. Its sound can be
              both sweet and powerful, making it a central instrument in
              orchestras, chamber ensembles, and as a solo instrument.
              <span className="wiki-link">
                For more information click
                <a href="https://en.wikipedia.org/wiki/Violin" target="_blank">
                  here
                </a>
              </span>
            </p>

            <div className="instrument-img-container">
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041788/ai%20images/_0b3678cb-ddd8-4495-8187-a8d15ba1ea00_jjsrr0.jpg"
                alt="violin"
                className="instrument-img"
              />
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041790/ai%20images/_32cecaad-ca52-4093-82ec-fd5d22ad460b_yyrkw8.jpg"
                alt="violin"
                className="instrument-img"
              />
            </div>
          </div>
        </div>

        <div className="instrument-card">
          <p>
            <strong className="instrument-name">Flute</strong>
          </p>
          <div className="instrument-desc-img">
            <p className="instrument-desc">
              The violin is a prominent and versatile string instrument with a
              history dating back several centuries. It features four strings
              stretched over a hollow, wooden body, typically made from maple
              and spruce. Musicians use a bow, usually made of horsehair, to
              create sound by stroking or "bowing" the strings. Alternatively,
              they can pluck the strings with their fingers, a technique known
              as "pizzicato." The violin's range and expressive capabilities
              have made it a cornerstone in various music genres, including
              classical, folk, jazz, and contemporary styles. Its ability to
              convey a wide range of emotions, from melancholy to exuberance,
              contributes to its enduring popularity. Mastering the violin
              requires intricate finger placement on the fingerboard to produce
              different pitches, as well as an understanding of bowing
              techniques to control dynamics and articulation. Its sound can be
              both sweet and powerful, making it a central instrument in
              orchestras, chamber ensembles, and as a solo instrument.
              <span className="wiki-link">
                For more information click{" "}
                <a href="https://en.wikipedia.org/wiki/Flute" target="_blank">
                  here
                </a>
              </span>
            </p>

            <div className="instrument-img-container">
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041789/ai%20images/_05de32c7-c57b-4666-a98a-339044558109_qqqcue.jpg"
                alt="flute"
                className="instrument-img"
              />
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041793/ai%20images/wp11271926-bamboo-flute-wallpapers_omsmjp.jpg"
                alt="flute"
                className="instrument-img"
              />
            </div>
          </div>
        </div>

        <div className="instrument-card">
          <p>
            <strong className="instrument-name">Mridangam</strong>
          </p>
          <div className="instrument-desc-img">
            <p className="instrument-desc">
              The mridangam is a percussion instrument originating from South
              India, highly regarded for its rich tones and rhythmic complexity.
              It's a double-headed drum made primarily from wood and has a
              distinctive shape with a narrow waist in the middle. The two heads
              are made of layered skin—traditionally from the skin of the
              goat—stretched over the drum's hollowed-out body. What sets the
              mridangam apart is its versatility in producing a wide range of
              tones. One side of the drum, the smaller head known as the
              "valanthalai," produces a higher pitch, while the larger head, the
              "bass head" or "thoppi," generates deeper tones. Skilled players
              use their fingers, palms, and sometimes even elbows to strike the
              different parts of the drumhead, creating intricate rhythms and
              melodies. In Indian classical music, particularly in the Carnatic
              tradition, the mridangam serves as an essential accompaniment to
              vocalists, instrumentalists, and dancers. Its ability to
              complement and enhance the rhythmic structure of performances
              makes it a vital component in concerts and recitals. Learning to
              play the mridangam involves rigorous training to master its varied
              strokes, intricate patterns, and the subtleties of rhythm, earning
              it a revered status among percussion instruments in Indian
              classical music.
              <span className="wiki-link">
                For more information click
                <a
                  href="https://en.wikipedia.org/wiki/Mridangam"
                  target="_blank"
                >
                  here
                </a>
              </span>
            </p>

            <div className="instrument-img-container">
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041789/ai%20images/_a8db9a78-d1fa-425a-a9d7-1e6bd86a28fb_iuyuqm.jpg"
                alt="mridangam"
                className="instrument-img"
              />
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041788/ai%20images/_07627951-568a-4d50-898f-3b6c6b114397_zqfbc9.jpg"
                alt="mridangam"
                className="instrument-img"
              />
            </div>
          </div>
        </div>

        <div className="instrument-card">
          <p>
            <strong className="instrument-name">Ghatam</strong>
          </p>
          <div className="instrument-desc-img">
            <p className="instrument-desc">
              The ghatam is a traditional percussion instrument from South
              India, known for its distinctive shape and earthy, resonant sound.
              It's a clay pot typically made from a special type of terracotta
              and coated with a mixture of brass, copper, and iron fillings to
              enhance its tonal qualities. This pot-shaped instrument has a
              narrow mouth at the top and a wide base, often with a small hole
              in the center covered by a layer of wetted cloth. Musicians play
              the ghatam by striking various parts of its surface with their
              fingers, palms, and sometimes even the heels of their hands. By
              modulating the pressure and position of their strikes, performers
              produce different tones and rhythms. The ghatam's sound can range
              from deep, bass-like tones to crisp, high-pitched notes, allowing
              for a wide tonal palette. Its unique timbre and ability to create
              complex rhythms make it a valuable accompaniment in South Indian
              classical music, particularly in Carnatic music. Additionally,
              it's used in fusion genres, providing a distinctive percussive
              element to contemporary music compositions. Learning to play the
              ghatam involves a deep understanding of hand techniques, precise
              control of finger movements, and a keen sense of rhythm,
              contributing to its significance in Indian percussion traditions.
              <span className="wiki-link">
                For more information click
                <a href="https://en.wikipedia.org/wiki/Ghatam" target="_blank">
                  here
                </a>
              </span>
            </p>

            <div className="instrument-img-container">
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041789/ai%20images/_9e6bdfbb-6698-4a04-a18d-1dfd8f45e1cc_qes1l2.jpg"
                alt="ghatam"
                className="instrument-img"
              />
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041788/ai%20images/_4c6fa4d4-4419-4013-bb3e-590c2a2a9514_tf4n2l.jpg"
                alt="ghatam"
                className="instrument-img"
              />
            </div>
          </div>
        </div>

        <div className="instrument-card">
          <p>
            <strong className="instrument-name">Kanjira</strong>
          </p>
          <div className="instrument-desc-img">
            <p className="instrument-desc">
              The kanjira, also known as the khanjira, is a traditional South
              Indian percussion instrument. It's a handheld frame drum with a
              circular wooden frame, usually made from the jackfruit tree, and a
              single drumhead, traditionally made from monitor lizard skin but
              nowadays often replaced with synthetic materials due to
              conservation concerns. This drum is small in size, usually around
              7-8 inches in diameter, and is held in one hand while playing.
              Unlike a tambourine, the kanjira doesn’t have jingles; instead, it
              relies on the musician's hand movements to produce sound. Players
              use their fingertips, palms, and the heel of their hand to strike
              and manipulate the drumhead, creating a wide range of tones and
              rhythms. The kanjira is highly appreciated for its ability to
              produce subtle nuances in sound and intricate rhythmic patterns.
              It's a vital instrument in South Indian classical music,
              particularly in Carnatic music, where it serves as an
              accompaniment to vocalists, instrumentalists, and dancers.
              Mastering the kanjira involves precise control of finger
              movements, hand techniques, and a deep understanding of rhythm,
              contributing to its significance in Indian percussion traditions.
              <span className="wiki-link">
                For more information click
                <a href="https://en.wikipedia.org/wiki/Kanjira" target="_blank">
                  here
                </a>
              </span>
            </p>

            <div className="instrument-img-container">
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041788/ai%20images/_3a213c12-d004-4631-9035-53b5879bb750_kkstd3.jpg"
                alt="Kanjira"
                className="instrument-img"
              />
              <img
                src="https://res.cloudinary.com/dj1bucjya/image/upload/v1704041789/ai%20images/_a42d9618-d455-4355-b0a7-96b3c69aa5eb_gfrkve.jpg"
                alt="Kanjira"
                className="instrument-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Instruments;
