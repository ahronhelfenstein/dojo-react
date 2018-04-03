function ComponenteComProps(props) {
    return <h1>Olá, {props.name}</h1>;
  }
  
  function App() {
    return (<div><ComponenteComProps name="Ahron"/></div>
    );
  }
  
  ReactDOM.render(<app>, document.getElementById('root'))
</app>