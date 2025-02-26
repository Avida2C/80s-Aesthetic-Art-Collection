import "../App.css"; // Add your custom CSS

export default function About() {
  return (
    <div
      className="container py-2 text-white"
      style={{ backgroundColor: "#120032" }}
    >
      {/*"about me" */}
      <div className="row d-flex py-5">
        <div className="col-auto">
          <img
            src="/images/avatar.jpg"
            alt="Avatar"
            className="avatar"
            style={{
              height: "125px",
              objectFit: "cover",
              borderRadius: "200px",
            }}
          />
        </div>
        <div className="col-auto">
          <div className="row d-flex">
            <div className="col-auto">
              <h1 style={{ fontFamily: "Audiowide" }}>Avida2C</h1>
            </div>
            <div className="col-auto">
              <p style={{ fontStyle: "italic" }}>Malta</p>
            </div>
          </div>
          <p style={{ color: "aqua" }}>Unique and bright, pure delight!</p>
          <p style={{ fontWeight: "750" }}>
            Digital Artist | Hobbyist | UI Designer
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="fs-5">Hi, I'm Avida!</h2>
        <div className="row d-flex">
          <div className="col-6 pe-4">
            <p>
              I’m a digital artist, hobbyist, and UI designer passionate about
              bold, vibrant, and expressive art. My work blends retro-futuristic
              aesthetics, quirky characters, and sleek design elements. I use
              Affinity Designer, Procreate, and Figma to bring ideas to
              life—whether it's illustration, UI concepts, or experimental
              designs.
            </p>
            <p>
              I love exploring new styles and pushing creative boundaries. If
              you ever have a custom idea, feel free to reach out—I’m always up
              for something new!
            </p>
          </div>
          <div className="col-6 pe-4">
            <p>
              I create bold, colorful, and fun designs that spark joy,
              nostalgia, and energy. Inspired by retro aesthetics, futuristic
              design, and everyday creativity, my work often features expressive
              characters and dynamic compositions.
            </p>
            <p>
              I enjoy experimenting with new styles and techniques, refining my
              retro and 80s-inspired aesthetics, and reworking older pieces to
              reflect my artistic growth. My creative process always starts with
              sketches, moodboards, and a lot of trial and error!
            </p>
          </div>
        </div>

        <div className="py-4">
          <h1 className="fs-6">Let’s Make Something Awesome!</h1>
          <p>
            Got an idea, a question, or just want to say hi? Drop me a note, and
            let’s chat!
          </p>
        </div>
      </div>
    </div>
  );
}
