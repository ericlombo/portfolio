import React, {useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services';
import Works from './components/Works';

function App(){
    const[theme, setTheme] = useState('light');
    
    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark');
        }else{
            setTheme('light')
        }
    },[])
    useEffect(()=>{
        if(theme=== 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[theme])

const handleThemeSwitch = () =>{
 setTheme(theme === 'dark'  ? 'light' : 'dark');
}

    return(
        <>
        <button type='button' onClick={handleThemeSwitch} className="fixed z-10 right-2 top-2 bg-pink-500 text-lg p-1 rounded-md">
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div className="font-inter bg:white dark:bg-slate-900">
        
        <div className="max-w-5xl mx-auto w-11/12">
        <HeroSection></HeroSection>
        <Services></Services>
        <Works></Works>
        </div>
        </div>
        </>
    )
}
export default App