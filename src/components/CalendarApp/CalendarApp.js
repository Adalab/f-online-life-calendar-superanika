import React from 'react';
import Header from '../Header/Header';
import {Route, Switch, withRouter} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Edit from '../Edit/Edit';
import helper from '../helper';
import './CalendarApp.scss';


class CalendarApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          mood: '',
          message: '',
          newDate: new Date (),
          dateList: this.getSavedState(),
          isDuplicated: false,
          isChecked: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);
        this.handleInputMessage= this.handleInputMessage.bind(this);
        this.reset= this.reset.bind(this);
        this.saveData= this.saveData.bind(this);
        this.hideInfo= this.hideInfo.bind(this);
      }

      getSavedState() {
          let savedState  = localStorage.getItem('savedInfo');
          if (!savedState){
              savedState = [];
          } else {
              savedState = JSON.parse(savedState, helper.reviver);
          }
          return savedState;
      }

      hideInfo (event) {
            const target = event.currentTarget;
            const isChecked = target.checked;
            this.setState({
                isChecked: isChecked
            })
      }

      handleChange(date) {
        this.setState({
          newDate: date,
          isDuplicated: false
        });
      }
      handleChecked(event) {
          const radioChecked = event.currentTarget.value;
          this.setState ({
              mood: radioChecked
          })
      }
      handleInputMessage (event) {
          const userMessage = event.currentTarget.value;
          this.setState ({
            message: userMessage
        })
      }
      reset() {
        this.setState ({
            mood: '',
            newDate: new Date(),
            message: '',
            isDuplicated: false,
        })
    }
    isNewDateInListDate(list, newDate) {
        for(const info of list) {
            if (helper.getFormatedDate(info.newDate) === helper.getFormatedDate(newDate)) {
                return true;
            }
        }
        return false;
    }

    saveData () {
        const userInfo = {
            newDate: this.state.newDate,
            mood: this.state.mood,
            message: this.state.message
        };

        if (this.isNewDateInListDate(this.state.dateList, userInfo.newDate)) {
            this.setState ({isDuplicated: true})
        } else {
            const newDateList = [...this.state.dateList, userInfo];

            this.setState ({
                dateList : newDateList,
            });    
            
            localStorage.setItem('savedInfo', JSON.stringify(newDateList));
            
            this.reset();

            this.props.history.push('/');
        }
    }

    render() {
        const {mood, message, newDate, dateList, isDuplicated, isChecked} = this.state;

        return (
            <React.Fragment>
                <header className="header">
                    <Header />
                </header>
                <main className="main__wrapper">
                    <Switch>
                        <Route exact path="/" render= {
                            () => <Home 
                                dateList = {dateList}
                                isChecked = {isChecked}
                                hideInfo = {this.hideInfo}
                            />
                        }></Route>
                        <Route path ="/edit" render={
                            () => <Edit
                                  handleChange= {this.handleChange}
                                  mood= {mood}
                                  handleChecked= {this.handleChecked}
                                  handleInputMessage= {this.handleInputMessage}
                                  message= {message}
                                  newDate= {newDate}
                                  reset= {this.reset}
                                  saveData= {this.saveData}
                                  isDuplicated= {isDuplicated}
                                  />
                        }></Route>
                    </Switch>
                </main>
                <footer className="footer">
                    <Footer />
                </footer>
            </React.Fragment>

        );
    }
}

export default withRouter(CalendarApp);