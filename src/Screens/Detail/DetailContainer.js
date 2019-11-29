import React from "react";
import DetailPresenter from "./DetailPresenter";
import { getDetail } from "../../api";


export default class extends React.Component {

    state = {
        loading:true,
        detail:null
    };

    componentDidMount() {
        this.getDetail();
    }

    getDetail = async () => {
        try{
            const {match:{params:{id}}} = this.props;
            const {data:detail}= await getDetail(id);
            console.log(detail);

            this.setState({
                detail
            });
        }catch (e) {
            console.log(e);
        }finally {
            this.setState({
                loading:false
            });
        }
    };

    render() {
        return(<DetailPresenter {...this.state} />);
    }

}
