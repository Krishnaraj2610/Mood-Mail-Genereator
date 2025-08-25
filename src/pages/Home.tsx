import Moodinput from '@/components/Moodinput'
import MoodOutput from '@/components/MoodOutput';

import {useState} from 'react'

const Home = () => {

    const [mood, setMood]=useState("");
    const [subject, setSubject]=useState("");
    const [footer,setFooter]=useState("");
    const [generated, setGenerator]=useState(false);

    const handleGenerate = () => {
         const lowerMood=mood.toLowerCase();

         if (lowerMood.includes("happy")){
            setSubject("Feeling great Today!");
            setFooter("Stay awesome!");
        }else if(lowerMood.includes("sad")){
            setSubject("Just another Tough Day");
            setFooter("Sending Hugs!");
        }else if (lowerMood.includes("angry")){
            setSubject("Need to Cool Down");
            setFooter("Take it Easy!");
        }else{
            setSubject("Mood Update");
            setFooter("Catch you later!");
        }
        setGenerator(true);
    }

    const HandleReset =()=>{
        setMood("");
        setSubject("");
        setFooter("");
        setGenerator(false);
    }

  return (
    <div className='max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-sm bg-white space-y-6'>
       <h2 className='text-2xl font-bold text-grey-800'>MoodMail Generator</h2>
    
     {!generated ?(<Moodinput mood={mood} setMood={setMood}
    onGenerate={handleGenerate} 
    disabled={generated}
    />):(<MoodOutput Subject={subject} footer={footer} onReset={HandleReset}/>)}
    
    
    </div>
  )
}

export default Home
