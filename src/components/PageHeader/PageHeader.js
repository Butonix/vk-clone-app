import React           from 'react';
import styled           from 'styled-components';

import PageHeaderLogo   from './PageHeaderLogo';
import PageHeaderSearch from './PageHeaderSearch';
import PageHeaderBell   from './PageHeaderBell';
import PageHeaderProfile from './PageHeaderProfile';

const Header = styled.div`
    background: #4a76a8;
    min-height: 42px;
`;

const Container = styled.div`
  max-width: 990px;
  margin: 0 auto;
  padding: 0 15px;
  overflow: hidden;
  display: flex;
`;

export default class PageHeader extends React.Component {
    render() {
        return(
            <Header >
                <Container>
                   <PageHeaderLogo 
                        alt="vk-logo"
                        src="/images/vk-logo.svg"
                        title="vk-logo" 
                    />
                   <PageHeaderSearch />
                   <PageHeaderBell />
                   <PageHeaderProfile />
                </Container>
            </Header>
        );
    }
}


