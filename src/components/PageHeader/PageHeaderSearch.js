import  React                  from 'react';
import  styled                 from 'styled-components';
import { withBaseIcon }  from 'react-icons-kit'
import { search }                from 'react-icons-kit/fa/search';



const SideIconContainer =  withBaseIcon({ size: 14, style: {
    color: '#d9e2ec',
    position: 'absolute',
    left: '7px',
    top: '14px'
}});
   
const SearchContainer = styled.div`
    position: relative;
    margin-left: 130px;
    
`
const SearchInput = styled.input`
    border: 0;
    box-sizing: border-box;
    padding: 6px 6px 6px 21px;
    margin: 7px 0;
    height: 28px;
    line-height: 16px;
    width: 230px;
    border-radius: 14px;
    transition: background-color 0.05s, color 0.05s;
    padding-left: 19px;
    border-left: 8px solid transparent;
    background: #224b7a;
    outline: none;
    color: #555;
    font-size: 13px;
    &:focus {
        background: #fff;
        transition: all 0.3s;
    }
    &::-webkit-input-placeholder {
     color: #d9e2ec;
     opacity: .5;
     font-weight: normal;
    }
`;

export default class PageHeaderSearch extends React.Component {
    render() {
        return (
           <SearchContainer>
                 <SideIconContainer icon={search} />
                 <SearchInput 
                    placeholder="Поиск"
                    type="text"
                / >
            </SearchContainer>
        );
    }
}