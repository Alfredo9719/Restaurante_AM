function Section({ source = "", texto = "" }) {
    return (

          <div className="card" style={{width: '18rem'}}>
                <img src={source} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{texto}</p>
                </div>
            </div>

    );
}

export default Section;