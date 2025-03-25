import React from "react";



function MoodDisplay({mood})
{

    const moods={
        Happy:"Keep Smiling!😆 Enjoy your Day",
        Sad:"It's okay to be Sad Sometimes😔 Feel pannathinga😊",
        Excited:"Let's Celebrate😃 Majja Pannuga",
        Angry:"Take a deep Breath 😤 Take it Easy🤷‍♀️",
    };


    return(
     <div>
        {mood?<p>{moods[mood]}</p>:<p>Select Your Mood </p>}
    </div>
    );
    
}
export default MoodDisplay;