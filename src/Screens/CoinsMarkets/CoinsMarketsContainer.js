import React from "react";
import CoinsMarketsPresenter from "./CoinsMarketsPresenter";
import { getDetailMarkets } from "../../api";

export default class extends React.Component {

    state = {
        loading:true,
        markets:[]
    };

    componentDidMount() {
        this.getDetailMarkets();
    }
    getDetailMarkets = async () => {
        try{

            const {match:{params:{id}}} = this.props;
            const {data:markets} = await getDetailMarkets(id);
            console.log('markets~~',markets);
            this.setState({markets});

        }catch (e) {
            console.log(e);
        }finally {
            this.setState({loading:false});
        }
    };

    render() {
        return(<CoinsMarketsPresenter {...this.state} />);
    }
}
