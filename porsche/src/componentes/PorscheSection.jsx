import "./PorscheSection.css";

function PorscheSection() {

  const cars = [
    {
      id: 1,
      name: "Porsche 911",
      img: "/imagenes/porshe.jpg",
      color: "#f8f8f8"
    },
    {
      id: 2,
      name: "Porsche Taycan",
      img: "/imagenes/Porsche Taycan.jpg",
      color: "#e6f2ff"
    },
    {
      id: 3,
      name: "Porsche Cayenne",
      img: "/imagenes/Porsche Cayenne.jpg",
      color: "#fff2e6"
    }
  ];

  return (
    <section className="porsche-section">

      <h1>Modelos Porsche</h1>

      <div className="cars-container">

        {cars.map((car) => (
          <div
            key={car.id}
            className="car-card"
            style={{ backgroundColor: car.color }}
          >

            <img src={car.img} alt={car.name} />

            <h3>{car.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default PorscheSection;