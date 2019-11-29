import React from "react";
import CoinsExchangesPresenter from "./CoinsExchangesPresenter";
import { getDetailExchanges } from "../../api";

export default class extends React.Component {

    state = {
        loading:true,
        exchanges:[]
    };

    componentDidMount() {
        this.getDetailExchanges();
    }
    getDetailExchanges = async () => {
        try{
            const {match:{params:{id}}} = this.props;
            const {data:exchanges} = await getDetailExchanges(id);
            this.setState({exchanges});
            console.log('exchanges~',exchanges);

        }catch (e) {
            console.log(e);
        }finally {
            this.setState({loading:false});
        }
    };

    render() {
        return(<CoinsExchangesPresenter {...this.state} />);
    }
}
