import  React       from 'react';
import  PropTypes   from 'prop-types';

const PageHeaderLogo = (props) => {
    return (
        <img  
            src={props.src}
            alt={props.alt}
            title={props.title}
        />
    )
};

export default PageHeaderLogo;

PageHeaderLogo.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string
  };



