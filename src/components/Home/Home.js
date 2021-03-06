import React from 'react';
import {Link} from 'react-router-dom';
import helper from '../helper';
import './Home.scss'

class Home extends React.Component {
 
   
    render() {
        const {dateList, hideInfo, isChecked} = this.props;
        const happyDays = dateList ? dateList.filter(item => item.mood === "happy") : 0;
        const sadDays = dateList ? dateList.filter(item => item.mood === "sad"): 0;
    

        return (
            
            <div className="home__wrapper">
                <Link to= "/edit">
                    <button className="add__buttom">+</button>
                </Link>
                <div className="mood__container">
                    {
                        dateList.length === 0 ?
                        <p className="welcome__info">You can start adding your date status by clicking on + button</p>
                        :
                        dateList.map((item, index) =>
                          item.mood === "happy" ?
                            <div className="face__container"  key={index} >
                                <span className="face" role="img" aria-label="happy face">😁</span>
                                <div className={isChecked ? "info__container hide" : "info__container"}>
                                    <p className="date">{helper.getFormatedDate(item.newDate)}</p>
                                    <p className="text">{item.message}</p>
                                </div>
                            </div>
                            :
                            <div className="face__container" key={index} onClick={this.handleShow}>
                                <span  className="face" role="img" aria-label="sad face">😡</span>
                                <div className={isChecked ? "info__container hide" : "info__container"}>
                                    <p className="date">{helper.getFormatedDate(item.newDate)}</p>
                                </div>
                            </div>
                        )
                     }
                </div>
                <div className="options">
                    <label className="hide__info" htmlFor="hideInfo">
                        <input id="hideInfo" type="checkbox" value="hideInfo" name="hideInfo" onClick={hideInfo}/>
                          Hide info        
                    </label>
                    <p className="number">Good days: {happyDays.length}</p>
                    <p className="number">Bad days: {sadDays.length}</p>
                </div>
            </div>
        );
    }
   
}

export default Home;