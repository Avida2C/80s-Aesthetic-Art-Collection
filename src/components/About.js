import "../App.css"; // Add your custom CSS
import favorites from "./data/favorites";

export default function About() {
    return (
        <div className="container py-2 text-white" style={{ backgroundColor: "#120032" }}>
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
                            <h1>Avida2C</h1>
                        </div>
                        <div className="col-auto">
                          
                            <p style={{ fontStyle: "italic" }}>Malta</p>
                        </div>
                    </div>
                    <p style={{color:"aqua"}}>Unique and bright, pure delight!</p>
                    <p style={{ fontWeight: "750" }}>
                        Digital Artist | Hobbyist | UI Designer
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="fs-5">About Me</h2>
                        <h1 className="fs-6">My Bio</h1>
                        <p> </p>
                        <p>For me, art is about sparking joy, inspiration, and personality. I love blending creativity with a sense of fun, whether that means retro-futuristic aesthetics, quirky doodles, or something in between. If you ever have a custom idea in mind, feel free to reach out—I'm always up for something new!</p>
                    </div>
                    {/* Favorites Section */}
          <div className="col">
            <h2 className="fs-5">My Favorites</h2>
            <div className="favorites-list">
              {favorites.map((fav) => (
                <p key={fav.id} className="favorite-item">
                  <strong>{fav.title}:</strong> <br /> {fav.answer}
                </p>
              ))}
           
          </div>
          </div>
                </div>
            </div>
        </div>
    );
}
