import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let dialogsData = [
  { id: 1, name: 'Tony Stark' },
  { id: 2, name: 'Steve Rogers' },
  { id: 3, name: 'Peter Parker' },
  { id: 4, name: 'Bruce Banner' },
  { id: 5, name: 'Natasha Romanoff' }
]

let messagesData = [
  { id: 1, message: 'Hi!' },
  { id: 2, message: 'How you doin?' },
  { id: 3, message: 'Hi...' }
]

let postsData = [
  { id: 1, post: 'Hi! How are you?', likes: 182 },
  { id: 2, post: "I'm fine!", likes: 44 },
  { id: 3, post: 'first, second, third post!', likes: 41 },
  { id: 4, post: 'Banana!', likes: 182 },
  { id: 5, post: 'Blenanas!!', likes: 41 },
  { id: 5, post: 'What time is it?', likes: 66 }
]

root.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData} />

  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
