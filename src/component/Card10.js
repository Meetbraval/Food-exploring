import './Card10.css';
import './Headingmacd.css';

function Card10() {
    return (
        <>
            <div className="container">
                <div className="card mb-3">
                    <img src={require('./image/Macd.jpg')} className="card-img-top sixSize" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Macdonalds</h5>
                        <p className="card-text">McDonald's in India does not serve beef or pork for religious reasons and you'll find a gazillion vegetarian options on the menu.The McDonald's target audience is mainly lower to middle class consumers, who are interested in fast, cheap and convenient food.</p>

                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">DominOS</h5>
                        <p className="card-text">Domino's is a Global Brand, founded in 1960 and is the recognized world leader in pizza delivery operating a network of company-owned and franchise-owned stores in the United States and international markets. In 1996, the first Domino's Pizza store was opened in New Delhi.The company opened the first Domino's Pizza outlet in New Delhi, India in 1996. In the Indian subcontinent, Domino's franchise is operated by Jubilant Foodworks Limited. Domino's has enjoyed enormous success in India, and it has become its second largest market in the world after the US.</p>

                    </div>
                    <img src={require('./image/domino.jpg')} className="card-img-bottom sixSize" alt="..." />
                </div>
            </div>
            <div className="container Mac">
                <h2 className="txtmac">Luxurious Restaurants in All Cities</h2>


            </div>


            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card">
                            <img src={require('./image/R1.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">MUMBAI</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('./image/R2.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">PUNE</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('./image/R3.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">AHMBDABAD</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={require('./image/R4.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">DELHI</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </>
    );
}
export default Card10; 