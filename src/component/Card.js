import './Card.css';
function Card() {
    return (

        <>
            <div className="container cardSpacing">
                <div className="row cardSpacing">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={require('./image/pitzaa.jpg')} clasNames="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">PiTZAAAA</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={require('./image/pasta.jpg')} clasNames="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Paastaa</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>


                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={require('./image/buger.jpg')} clasNames="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Burger</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="https://www.pexels.com/search/burger/" className="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>


                    </div>


                </div>

            </div>
        </>



    );
}

export default Card;
