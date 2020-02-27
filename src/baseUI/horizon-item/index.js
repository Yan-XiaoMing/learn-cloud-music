import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Scroll from '../scroll';
import PropTypes from 'prop-types';
import style from '../../assets/global-style';


function Horizon(props) {

    const {list, oldVal, title, handleClick} = props;
    const Category = useRef(null);

    useEffect(() => {
        let categoryDOM = Category.current;
        let tagElems = categoryDOM.querySelectorAll('span');
        let totalWidth = 0;
        Array.from(tagElems).forEach(ele => {
            totalWidth += ele.offsetWidth;
        });
        categoryDOM.style.width = `${totalWidth}px`;

    }, []);

    return (
        <Scroll direction={'horizontal'}>
            <div ref={Category}>
                <List>
                    <span>{title}</span>
                    {
                        list.map((item) => {
                            return (
                                <ListItem
                                    key={item.key}
                                    className={`${oldVal === item.key ? 'selected' : ''}`}
                                    onClick={() => handleClick(item.key)}
                                >
                                    {item.name}
                                </ListItem>
                            );
                        })
                    }
                </List>
            </div>
        </Scroll>
    );
}

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  >span:first-of-type{
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style['font-size-m']};
    vertical-align: middle;
  }
`;

const ListItem = styled.span`
      flex: 0 0 auto;
      font-size: ${style['font-size-m']};
      padding: 5px 8px;
      border-radius:10px;
      &.selected{
      color: ${style['theme-color']};
      border: 1px solid ${style['theme-color']};
      opacity: 0.8;
  }
  
`;

//list为接受的数据列表数据
//oldVal 为当前item
//title 为列标左侧标题
//handleClick 为点击不同item所执行的方法
Horizon.defaultProps = {
    list: [],
    oldVal: '',
    title: '',
    handleClick: null
};

Horizon.propTypes = {
    list: PropTypes.array,
    oldVal: PropTypes.string,
    title: PropTypes.string,
    handleClick: PropTypes.func
};

export default React.memo(Horizon);
