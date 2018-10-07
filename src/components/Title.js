import React from 'react';
import '../css/style.scss';

const Title = ({text}) => {
  return (
    <div className="blueText">
      <h1>{text}</h1>
    </div>
  )

}
Title.defaultProps = {
  text: 'Untitled'
}


Title.propTypes = {
  text: React.PropTypes.string
}

export default Title;