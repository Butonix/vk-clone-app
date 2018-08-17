import  React       from 'react';
import  PropTypes   from 'prop-types';
import styled       from 'styled-components';


const PageHeaderLogoContainer = styled.div`
    justify-content: flex-start;
    display: flex;
    flex-basis: 20%;
`



const PageHeaderLogo = (props) => {
    return (
        <PageHeaderLogoContainer>
            <img  
                src={props.src}
                alt={props.alt}
                title={props.title}
            />
        </PageHeaderLogoContainer>
    )
};

export default PageHeaderLogo;

PageHeaderLogo.propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string
  };



