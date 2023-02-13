function Button(props) {
    console.log(props);
  
    return (
      <button
        onClick={props.click}
        className={props.className ? props.className : "bt"}
      >
        {props.label}
      </button>
    );
  }
  