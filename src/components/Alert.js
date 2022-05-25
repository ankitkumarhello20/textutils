import React from 'react';

function Alert(props) {
  const capitalize =(word)=>{
    const lower=word.toLowerCase();     //will take other alphabet except 1
    return lower.charAt(0).toUpperCase() +lower.slice(1)
  }
  return (
                                //will gib=ve green color
    props.alert &&<div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
  
</div>
  )
}

export default Alert;
