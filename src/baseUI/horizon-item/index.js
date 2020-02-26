import React,{useState,useRef,useEffect} from 'react';
import styled from 'styled-components';
import Scroll from '../scroll';
import {PropTypes} from 'prop-types';
import style from '../../assets/global-style';

function Horizen(props) {

    const {list,oldVal,title,handleClick} = props;

    return(
        <Scroll direction={"horizental"}>

        </Scroll>
    )
}

//list为接受的数据列表数据
//oldVal 为当前item
//title 为列标左侧标题
//handleClick 为点击不同item所执行的方法
Horizen.defaultProps= {
    list:[],
    oldVal:'',
    title:'',
    handleClick:null
};

Horizen.propTypes = {
    list: PropTypes.array,
    oldVal: PropTypes.string,
    title: PropTypes.string,
    handleClick: PropTypes.func
};

export default React.memo(Horizen);
