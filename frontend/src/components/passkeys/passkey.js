import React from 'react';
import '../passkeys/passkey.css';

import studymaterial from '../assets/studymaterial.png'
import schemesImage from '../assets/schemes.jpg';

const Passkey = () => {

    /*------------------PASSKEYS SECTION LOGIC STARTS HERE----------------------*/
    const PassItem = ({ imgSrc, imgId, title, buttonId }) => (
        <div className="pass">
            <div className="img" id={imgId}>
                <img src={imgSrc} alt="" />
            </div>
            <button className='tag' id={buttonId}>
                <p>{title} </p>
            </button>
        </div>
    );


    const passItems = [
        { imgSrc: require('../assets/to do.svg').default, imgId: 'todoButton1', title: 'To Do list', buttonId: 'todoButton' },
        { imgSrc: require('../assets/cgpacalci.svg').default, imgId: 'cgpacalci1', title: 'C.G.P.A', subtitle: 'calculator', buttonId: 'cgpacalci' },
        { imgSrc: require('../assets/dailynotes.svg').default, imgId: 'notesbutton1', title: 'NOTES', buttonId: 'notesbutton' },
        { imgSrc: require('../assets/scicalci.svg').default, imgId: 'sci calci1', title: 'scientific calci', buttonId: 'sci calci' },
        { imgSrc: studymaterial, title: 'study material', storeImg: 'assets/offer 1.png' },
        { imgSrc: schemesImage, imgId: 'students-schemes1', title: 'student Schemes', buttonId: 'students-schemes' },
        { imgSrc: require('../assets/refer.svg').default, title: 'refer and Earn' },
        { imgSrc: require('../assets/library.svg').default, title: 'Library' },
    ];



    return (

        <section className="passkey" id="passkey">
            <h1>Passkey: <span>The Keys of the Success.!</span></h1>
            <div className="passkey-content">
                {passItems.map((item, index) => (
                    <PassItem
                        key={index}
                        imgSrc={item.imgSrc}
                        imgId={item.imgId}
                        title={item.title}
                        buttonId={item.buttonId}
                        subtitle={item.subtitle}
                        storeImg={item.storeImg}
                    />
                ))}
            </div>
        </section>
    );
};

export default Passkey;