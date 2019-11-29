import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Route, Link, withRouter } from "react-router-dom";
import Loader from "../../Components/Loader";
import Markets from "../CoinsMarkets";
import Exchanges from "../CoinsExchanges";

const Title = styled("h1")``;

const Description = styled("p")`
  margin: 30px 0px;
`;

const KeyValueRow = styled("div")`
  margin-bottom: 5px;
`;

const Key = styled("span")`
  font-weight: 600;
`;

const Value = styled("span")``;

const InsideMenu = styled("div")`
  margin: 20px 0px;
`;

const List = styled("ul")`
  display: flex;
`;

const Item = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 2px solid #1abc9c;
  padding: 5px;
  border-radius: 3px;
  background-color: ${props => (props.active ? "#1abc9c" : "transparent")};
  color: ${props => (props.active ? "white" : "black")};
`;

const CoinPresenter = withRouter(({ location: { pathname }, loading, detail }) =>
    loading ? (
        <Loader />
    ) : (
        <>
            <Title>
                {detail.name} / {detail.symbol}
            </Title>
            <Description>{detail.description}</Description>
            <KeyValueRow>
                <Key>Rank:</Key> <Value>{detail.rank}</Value>
            </KeyValueRow>
            <KeyValueRow>
                <Key>Open Source:</Key> <Value>{detail.open_source ? "Yes" : "No"}</Value>
            </KeyValueRow>
            <KeyValueRow>
                <Key>Proof Type:</Key> <Value>{detail.proof_type}</Value>
            </KeyValueRow>
            <KeyValueRow>
                <Key>Structure:</Key> <Value>{detail.org_structure}</Value>
            </KeyValueRow>
            <InsideMenu>
                <List>
                    <Item active={pathname === `/coins/${detail.id}/markets`}>
                        <Link to={`/coins/${detail.id}/markets`}>Markets</Link>
                    </Item>
                    <Item active={pathname === `/coins/${detail.id}/exchanges`}>
                        <Link to={`/coins/${detail.id}/exchanges`}>Exchanges</Link>
                    </Item>
                </List>
            </InsideMenu>
            <Route path="/coins/:id/markets" component={Markets} />
            <Route path="/coins/:id/exchanges" component={Exchanges} />
        </>
    )
);

CoinPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    coin: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        rank: PropTypes.number.isRequired,
        open_source: PropTypes.bool.isRequired,
        proof_type: PropTypes.string.isRequired,
        org_structure: PropTypes.string.isRequired
    })
};

export default CoinPresenter;
