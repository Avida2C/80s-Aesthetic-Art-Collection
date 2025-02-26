import "../App.css"; // Add your custom CSS

export default function Evaluation() {
  return (
    <div className="container py-2 text-white" style={{ backgroundColor: "#120032" }}>
      <div className="row">
        <div className="col my-2 text-end pt-3">
          <img className="img-fluid w-50" src="images/title.png" alt="80s Gallery logo" />
        </div>
      </div>
      <div className="row">
        <p>
          This self-evaluation essay provides me with an opportunity to assess the steps I have followed...
        </p>
        <figure>
          <img src="images/moodboard.png" alt="moodboard" className="w-100" />
          <figcaption style={{ backgroundColor: "#F430D7", padding: "0.2em" }}>
            Moodboard used to create the artworks.
          </figcaption>
        </figure>
        <p>
          The first task assigned to me involved selecting a color scheme from a specific era...
        </p>
      </div>
      <div className="container col-12">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <a href="/">
              <button className="glowing-btn">
                <span className="glowing-txt">G<span className="faulty-letter">ALL</span>ERY</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
