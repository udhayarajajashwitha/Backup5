import React, {useState, useEffect} from 'react';
import '../main-site/style.css';
import axios from 'axios';

export default function About(){

    const[user, setUser] = useState(['']);
    const[error, setError] = useState(false);
    const[loader, setLoader] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(response => {
            setUser(response.data);
            setError(false);
            setLoader(true)
        }) 
        .catch(error => {
            setError(true);
        })
    },[]);

    return(
        <div>            
            { loader ? 
            user.map((value, index) => (
                <div>
                    <div key={index}>
                        {value.title}
                    </div>
                </div>
            )) 

            : 'Loading'

            }

            { error ? '404 Error' : '' }

            <div className="how_it_work">
                <section>
                    <p>FIND YOUR DREAM HOUSE</p>
                    <h2>About Us</h2>
                </section>
                <section>
                    <div className="individ">
                        <h3>Search & Find Apertment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div className="individ">
                        <h3>Search & Find Apertment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div className="individ">
                        <h3>Search & Find Apertment</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}