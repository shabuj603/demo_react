import React from "react";
import Card from "./components/card";
import Data from "./data.json";
import Users from "./Users.json";
import Card1 from "./components/card1";
import Card2 from "./components/Card2";
import { FaCloudArrowDown, FaCow  } from "react-icons/fa6";
import ReactBootstrap from "./react_bootstrap/React_bootstrap";
import State from "./State";
import SingIn from "./CONDITIONAL_COMPONENT/SingIn";
import ClickHandler from "./EVENT_HANDLER_CLASS/ClickHandler";
import EventBinding from "./EVENT_HANDLER_CLASS/EventBinding";
import HookUseState from "./HOOK_USE_STATE/HookUseState";
import FunctionalHook from "./HOOK_USE_STATE/FunctionalHook";
import Signup from "./components/SIGNUP.JS/Signup";



// let item=[];
// for (let i = 0; i < Data.length; i++) {
//    item.push(<Card  titleText={Data[i].title}description={Data[i].description} cardFooter={Data[i].cardFooter}/>)
    
// }

function App(){
    return <div>
        <Signup/>
        <FunctionalHook/>
        <HookUseState/>
        <EventBinding/>
        <ClickHandler/>
        <SingIn/>
        <State/>
        <ReactBootstrap/>
        <FaCloudArrowDown/><FaCow />
        <Card2 title="card3 title here" description="i want to become a freelancer"/>
        <Card1 title="card 2" description="card 2 description"/>
        {Data.map((item,i) => <Card key={i} titleText={item.title} description={item.description} cardFooter={item.cardFooter}/>)}
        {/* nestated list */}

        {
            Users.map((user, i)=> (
            <article key={i}>
                <h2>{user.fullname}</h2>
                <p>{user.age}</p>
                {
                    user.phone.map((phones,i)=>(
                        <div key={i}>
                            <p>Home:{phones.home}</p>
                            <p>Office: {phones.office}</p>
                        </div>
                    ))
                }
            </article>
            ))
        }
       {/* nestated list end */}

  </div>
}
export default App;