import React, { Component } from 'react';

// Styled Components
import {
  StatictsContainer,
  StatictsTop
} from './StatisticsStyled';

import {
  PageHeaderBlock
} from './../../../AppStyled';

// React Components
import PagePagination from './../../PagePagination/PagePagination';



const toRoutArray = [
  'Ivan Zvonkov',
  'Statistics',
];

export default class Statistics extends Component {
  render() {
    return (
      <StatictsContainer>
        <PageHeaderBlock>
          <PagePagination 
            toRoutArray={toRoutArray}
        />
        </PageHeaderBlock>
      </StatictsContainer>
    )
  }
}
