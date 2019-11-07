import React from 'react';
// redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// component imports
import { removeFeature, buyItem } from './actions';
import { reducer } from './reducers';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';




const store = createStore(reducer);

const App = props => {
  

  // const removeFeature = e => {
  //   props.removeFeature();
  // };

  const buyItem = item => {
    props.buyItem(item);
  };

  return (
    <Provider store={store}>
      <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
      </div>
    </Provider>
  );
};

export default App;
