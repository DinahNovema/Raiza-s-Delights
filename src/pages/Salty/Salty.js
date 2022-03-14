import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

//styles
import "./Salty.css";

export default function Salty() {
  const [salty, setSalty] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore.collection("salty-menu").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("No salty foods to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setSalty(results);
          setIsPending(false);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );
    return () => unsub();
  }, []);
  return (
    <div className="salty-list">
      {isPending && (
        <div className="loadingio-spinner-bean-eater-xdgb8rfp6y">
          <div className="ldio-nbh2upc6wh">Loading salty foods...</div>
        </div>
      )}

      {error && <div className="error">{error}</div>}

      {salty &&
        salty.map((salty) => (
          <div key={salty.id}>
            <div className="salty-list">
              <div className="card">
                <img src={salty.image} className="images" />
                <p className="salty-title">{salty.title}</p>
                <p className="salty-fillings">{salty.fillings}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
