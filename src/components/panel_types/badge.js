import React, { Component } from 'react';
import Panel from '../panel';
import moment from 'moment';
import 'moment/locale/ru'; // Импортируем локаль для русского языка

class Badge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currDate: `${moment().format('dddd')}, ${moment().format('LL')}`,
      currTime: `${moment().format('LT')}` // Изменил формат времени на LT
    }

    this._updateTime = this._updateTime.bind(this);
    this._intervalId = this._intervalId.bind(this);
  }

  componentWillMount() {
    moment.locale('ru'); // Устанавливаем русскую локаль
    this._updateTime();
  };

  componentDidMount() {
    this._intervalId();
    this._updateTime();
  };

  _updateTime(){
    this.setState({
      currDate: `${moment().format('dddd')}, ${moment().format('LL')}`,
      currTime: `${moment().format('LT')}` // Изменил формат времени на LT
    })
  };

  _intervalId(){
    setInterval(() => this._updateTime(), 30000);
  };


  render() {
    return (
      <Panel {...this.props}>
        <h1 id="site-title">{this.props.title}</h1>
        <div className="badge">
          <h4>{moment().format('dddd')}, {moment().format('LL')}</h4>
          <h2>{moment().format('LT')}</h2> {/* Изменил формат времени на LT */}
        </div>
      </Panel>
    )
  }
};

export default Badge;
