import React from 'React';
import Card from '../Card/index.js';
import styled from 'styled-components';

const ManagementSection = styled.div`
    margin-top: 5rem;
    padding: 2rem;
    

    @media screen and (max-width:960px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2rem 0;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
        margin-right: 0;
    }
`


const PropManagementSection = () => {
    return(
        
            <ManagementSection>
                <h2>Let's maintain your investment<br/>and maximize your profit</h2>
                <h3>Our property management services...</h3>
                <CardWrapper>
                <Card headerTitle='Things to discuss'
                listItem1='ABCD properties'
                listItem2="Tenant's security deposit"
                listItem3='Length of contract'
                listItem4='Acceptable tenant criteria for placement'>
                </Card>
                <Card headerTitle='Cost of Services'
                listItem1='Start-up fee: $350/property'
                listItem2='At least $250/property maintained within My True Realty, Inc. account for small repairs'
                listItem3='Monthly management fee: 10% of monthly rent'>
                </Card>
                <Card headerTitle='End of First 12 Month Lease'
                listItem1='$40/year for 3rd party property inspection'
                listItem2='$145: Placement fee to initiate a new tenant(if current tenant does not renew their lease' ></Card>
                        </CardWrapper>
            </ManagementSection>
    )
}

export default PropManagementSection;