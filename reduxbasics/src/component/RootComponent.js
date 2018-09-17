import React from 'react';
import FeedbackTitle from '../containers/FeedbackTitle'
import FeedbackDescription from '../containers/FeedbackDescription'
class  RootComponent extends React.Component {
    
    render() { 
        return (
            <div>
                I am a root Component
                <p>I use container</p>
                <p></p>
                <FeedbackTitle/>
                <hr></hr>
                <FeedbackDescription/>
                </div>
            
         );
    }
}
 
export default RootComponent;