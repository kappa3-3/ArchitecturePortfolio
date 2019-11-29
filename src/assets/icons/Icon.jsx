import React from "react";
import IconBamboo from "./IconBamboo";
import IconCastle from "./IconCastle";
import IconDubai from "./IconDubai";
import IconFactory from "./IconFactory";
import IconHouse from "./IconHouse";

const conf = {
  bamboo : (props) => <IconBamboo {...props}/>,
  castle: (props) => <IconCastle {...props}/>,
  factory: (props) => <IconFactory {...props}/>,
  dubai: (props) => <IconDubai {...props}/>,
  house: (props) => <IconHouse {...props}/>,
  hostel: (props) => <IconHouse {...props}/>
};

const Icon = ({ type, ...restProps }) => conf[type]( restProps );
// const Icon = ({ type, ...restProps }) =>
//   {
//     const componentCreator = conf[type];
//     const component = componentCreator( restProps );
//
//     return component;
//   };


export default Icon;