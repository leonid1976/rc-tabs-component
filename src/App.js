import React from 'react';
import './App.css';
import Tabs  from './components/rs-tabs-component/rs-tabs-component'

function App() {

  const tags = ['TAB 1', 'TAB 2', 'TAB 3', 'TAB 4'];

  const Content1 = () => {
    return (
      <div>
        <h3>
        Tab 1 Content
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut faucibus pulvinar elementum integer enim. 
        Eu sem integer vitae justo eget magna fermentum iaculis eu. 
        Risus commodo viverra maecenas accumsan. Tortor at risus 
        viverra adipiscing at in tellus integer. Quis vel eros donec 
        ac odio tempor orci dapibus ultrices. 
        </p>
    </div>
    )
  } 

  class Content2 extends React.Component {

    render() {
      return (
      <div>
        <h3>
        Tab 2 Content
        </h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut faucibus pulvinar elementum integer enim. 
        Eu sem integer vitae justo eget magna fermentum iaculis eu. 
        Risus commodo viverra maecenas accumsan. Tortor at risus 
        viverra adipiscing at in tellus integer. Quis vel eros donec 
        ac odio tempor orci dapibus ultrices. 
        </p>
      </div>
      );
    }
  }



  return (
    <div className='App'>
      <div className='container'>
        <Tabs tags={tags}
              style_type='material'>
          <Content1/>
          <Content2/>
          <div>
            <h3>
              Tab 3 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Accumsan tortor posuere ac ut consequat. Augue neque gravida in 
            fermentum et sollicitudin. Integer malesuada nunc vel risus commodo
            viverra maecenas accumsan lacus. Auctor urna nunc id cursus metus 
            aliquam eleifend mi. Mattis rhoncus urna neque viverra justo nec 
            ultrices dui. Quis blandit turpis cursus in hac habitasse platea 
            dictumst. Egestas fringilla phasellus faucibus scelerisque eleifend 
            donec pretium vulputate sapien.
            </p>
          </div>
          <div>
            <h3>
              Tab 4 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>            
        </Tabs>
        <Tabs tags={tags}
              style_type='bootstrap'>
          <div>
            <h3>
              Tab 1 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut faucibus pulvinar elementum integer enim. 
            Eu sem integer vitae justo eget magna fermentum iaculis eu. 
            Risus commodo viverra maecenas accumsan. Tortor at risus 
            viverra adipiscing at in tellus integer. Quis vel eros donec 
            ac odio tempor orci dapibus ultrices. 
            </p>
          </div>
          <div>
            <h3>
              Tab 2 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Donec enim diam vulputate ut pharetra. Faucibus pulvinar 
            elementum integer enim neque volutpat ac tincidunt. Dictum sit 
            amet justo donec enim diam vulputate. Purus semper eget duis at 
            tellus at urna. Et molestie ac feugiat sed. Fames ac turpis 
            egestas integer eget. 
            </p>
          </div>
          <div>
            <h3>
              Tab 3 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Accumsan tortor posuere ac ut consequat. Augue neque gravida in 
            fermentum et sollicitudin. Integer malesuada nunc vel risus commodo
            viverra maecenas accumsan lacus. Auctor urna nunc id cursus metus 
            aliquam eleifend mi. Mattis rhoncus urna neque viverra justo nec 
            ultrices dui. Quis blandit turpis cursus in hac habitasse platea 
            dictumst. Egestas fringilla phasellus faucibus scelerisque eleifend 
            donec pretium vulputate sapien.
            </p>
          </div>
          <div>
            <h3>
              Tab 4 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>            
        </Tabs>
        <Tabs tags={tags}
              style_type='button'>
          <div>
            <h3>
              Tab 1 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut faucibus pulvinar elementum integer enim. 
            Eu sem integer vitae justo eget magna fermentum iaculis eu. 
            Risus commodo viverra maecenas accumsan. Tortor at risus 
            viverra adipiscing at in tellus integer. Quis vel eros donec 
            ac odio tempor orci dapibus ultrices. 
            </p>
          </div>
          <div>
            <h3>
              Tab 2 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Donec enim diam vulputate ut pharetra. Faucibus pulvinar 
            elementum integer enim neque volutpat ac tincidunt. Dictum sit 
            amet justo donec enim diam vulputate. Purus semper eget duis at 
            tellus at urna. Et molestie ac feugiat sed. Fames ac turpis 
            egestas integer eget. 
            </p>
          </div>
          <div>
            <h3>
              Tab 3 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Accumsan tortor posuere ac ut consequat. Augue neque gravida in 
            fermentum et sollicitudin. Integer malesuada nunc vel risus commodo
            viverra maecenas accumsan lacus. Auctor urna nunc id cursus metus 
            aliquam eleifend mi. Mattis rhoncus urna neque viverra justo nec 
            ultrices dui. Quis blandit turpis cursus in hac habitasse platea 
            dictumst. Egestas fringilla phasellus faucibus scelerisque eleifend 
            donec pretium vulputate sapien.
            </p>
          </div>
          <div>
            <h3>
              Tab 4 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>            
        </Tabs>  
        <Tabs tags={tags}>
          <div>
            <h3>
              Tab 1 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut faucibus pulvinar elementum integer enim. 
            Eu sem integer vitae justo eget magna fermentum iaculis eu. 
            Risus commodo viverra maecenas accumsan. Tortor at risus 
            viverra adipiscing at in tellus integer. Quis vel eros donec 
            ac odio tempor orci dapibus ultrices. 
            </p>
          </div>
          <div>
            <h3>
              Tab 2 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Donec enim diam vulputate ut pharetra. Faucibus pulvinar 
            elementum integer enim neque volutpat ac tincidunt. Dictum sit 
            amet justo donec enim diam vulputate. Purus semper eget duis at 
            tellus at urna. Et molestie ac feugiat sed. Fames ac turpis 
            egestas integer eget. 
            </p>
          </div>
          <div>
            <h3>
              Tab 3 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Accumsan tortor posuere ac ut consequat. Augue neque gravida in 
            fermentum et sollicitudin. Integer malesuada nunc vel risus commodo
            viverra maecenas accumsan lacus. Auctor urna nunc id cursus metus 
            aliquam eleifend mi. Mattis rhoncus urna neque viverra justo nec 
            ultrices dui. Quis blandit turpis cursus in hac habitasse platea 
            dictumst. Egestas fringilla phasellus faucibus scelerisque eleifend 
            donec pretium vulputate sapien.
            </p>
          </div>
          <div>
            <h3>
              Tab 4 Content
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>            
        </Tabs>                  
      </div>
    </div>
  );
}

export default App;
