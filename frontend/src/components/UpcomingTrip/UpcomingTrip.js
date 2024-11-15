const getPassengerName = () => {
    let nameArray = localStorage.getItem("nameData");
    let names = JSON.parse(nameArray);
  
    // Check if names is null or undefined before mapping over it
    if (!names) {
      return null; // or handle the case accordingly
    }
  
    return names.map((name, idx) => {
      return (
        <div key={idx}>
          <p className="names">{name}</p>
        </div>
      );
    });
  };
  