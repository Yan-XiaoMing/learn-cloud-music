import React, {useState} from 'react';
import Horizon from '../../baseUI/horizon-item';
import {alphaTypes, categoryTypes} from '../../api/config';
import {NavContainer} from './style';

function Singers() {

    let [category, setCategory] = useState('');
    let [alpha, setAlpha] = useState('');

    let handleUpdateAlpha = (val) => {
        setAlpha(val);
    };
    let handUpdateCategory = (val) => {
        setCategory(val);
    };

    return (
        <NavContainer>
            <Horizon
                list={categoryTypes}
                title={'分类(默认热门)'}
                handleClick={val => handUpdateCategory(val)}
                oldVal={category}/>
            <Horizon
                list={alphaTypes}
                title={'首字母:'}
                handleClick={val => handleUpdateAlpha(val)}
                oldVal={alpha}/>
        </NavContainer>
    );
}

export default React.memo(Singers);
