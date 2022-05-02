import './style.css'
import { Link } from 'react-router-dom'

export default function Navigate(){
    return(
        <div>
            <div className="wrapper">
                <div className="top_sec_bg">
                    <section>
                        <div className="top_sec">
                            <div className="mob_click_icon">
                                <ul>
                                    <li></li> 
                                    <li></li> 
                                    <li></li>
                                </ul>
                            </div>
                            <nav>
                                <ul>
                                    <li><a className="active" href="javascript:;"><Link to="/">HOME</Link></a></li>
                                    <li><a href="javascript:;"><Link to="/about">ABOUT US</Link></a></li>
                                    <li><a href="javascript:;"><Link to="/services">SERVICES</Link></a></li>
                                </ul>
                            </nav>
                            <div className="top_tight_sec">
                                <div className="lang_swich">
                                    <ul>
                                        <li><img src={require(`./images/uk_logo.png`).default} alt="" title="" /></li>
                                        <li>English</li>
                                        <li><a href="javascript:;"><i className="fa fa-angle-down"></i></a></li>
                                    </ul>
                                </div>
                                <div className="sub_CTA">
                                    <a href="javascript:;">Submit Property</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <header>
                    <section>
                        <div className="logo"><a href="javascript:;"><img src={require(`./images/logo.png`).default} alt="" title="" /></a></div>
                        <div className="top_contact_sec">
                            <div className="top_contact">
                                <li className="icon_cont"><i className="fa fa-phone"></i></li>
                                <li>
                                    <p><span>Phone:</span></p>
                                    <p>(+12) 345 6789</p>
                                </li>
                            </div>
                            <div className="top_contact">
                                <li className="icon_cont"><i className="fa fa-map"></i></li>
                                <li>
                                    <p><span>Address:</span></p>
                                    <p>16 Creek Ave, NY</p>
                                </li>
                            </div>
                            <div className="top_contact">
                                <li className="icon_cont"><i className="fa fa-envelope"></i></li>
                                <li>
                                    <p><span>Email:</span></p>
                                    <p>Info.cololib@gmail.com</p>
                                </li>
                            </div>
                        </div>
                    </section>
                </header>
            </div> 
        </div>
    )
}