import React, {useEffect} from 'react';
import Slider from '../../componets/slider';
import RecommendList from '../../componets/list';
import Scroll from '../../baseUI/scroll';
import {Content} from './style';
import * as actionTypes from './store/actionCreators';
import { connect } from "react-redux";
import {forceCheck} from 'react-lazyload';
import Loading from '../../baseUI/loading/index'

function Recommend(props) {

    const {bannerList, recommendList} = props;
    const {getBannerDataDispatch, getRecommendListDataDispatch} = props;

    useEffect(() => {
        if(!bannerList.size){
            getBannerDataDispatch();
        }
        if(!recommendList.size){
            getRecommendListDataDispatch();
        }
        // eslint-disable-next-line
    }, []);

    const bannerListJS = bannerList ? bannerList.toJS() : [];
    const recommendListJS = recommendList ? recommendList.toJS() :[];

    return (
        <Content>
            <Scroll className="list" onScroll={forceCheck}>
                <div>
                    <Slider bannerList={bannerListJS}/>
                    <RecommendList recommendList={recommendListJS}/>
                    <div>Recommend</div>
                </div>
            </Scroll>
            <Loading/>
        </Content>
    );
}

const mapStateToProps = (state) =>({
    bannerList:state.getIn(['recommend','bannerList']),
    recommendList:state.getIn(['recommend','recommendList'])
});

const mapDispatchToProps = (dispatch) => {
    return {
        getBannerDataDispatch () {
            dispatch (actionTypes.getBannerList ());
        },
        getRecommendListDataDispatch () {
            dispatch (actionTypes.getRecommendList ());
        },
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Recommend));
