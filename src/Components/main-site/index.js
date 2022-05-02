import './style.css'

export default function Mainsite(){
    return(
        <div>
             <div className="banner_sec">
                <div className="banner_copy">
                    <p><i className="fa fa-map-marker"></i> 9721 Glen Creek Ave. Ballston Spa, NY</p>
                    <h2>Villa 9721 Glen Creek</h2>
                    <p>Start Form: <span>$3.000.000</span></p>
                    <ul>
                        <li>
                            <i className="fa fa-arrows"></i><br />
                            5201 sqft
                        </li>
                        <li>
                            <i className="fa fa-bed"></i><br />
                            8 Bed Rooms
                        </li>
                        <li>
                            <i className="fa fa-bath"></i><br />
                            8 Baths Bed
                        </li>
                        <li>
                            <i className="fa fa-car"></i><br />
                            2 Grage
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}
