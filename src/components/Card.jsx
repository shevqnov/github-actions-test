import React from 'react';

class Card extends React.Component {
    componentDidMount = () => {
      // eslint-disable-next-line no-console
      console.log(this.props);
    }

    render() {
      const { title, text, image } = this.props;
      return (
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
          <img src={image} alt="test" />
        </div>
      );
    }
}

export default Card;
