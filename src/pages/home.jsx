import { useSelector } from "react-redux";
import { useRef, useState } from 'react'
import '@/assets/css/home.css'
import MainSection from '@/components/MainSection'
import PromoBanar from '@/components/common/navbar/promo_banar'
import TopNav from '@/components/common/navbar/top_nav'
import BottomNav from '@/components/common/navbar/bottomNav'
import MainNav from '@/components/common/navbar/main_nav'
import AdventagesSection from '@/components/homepages/adventagesection'
import WeeklyProduct from '@/components/homepages/weeklyproduct'
import ArriveSection from '@/components/homepages/arrivesection'
import FooterSection from '@/components/homepages/footersection'
import EditorsPick from '@/components/homepages/editorspick'

export default function Home() {
    const { user, token } = useSelector((state) => state.auth)
    const redir = () => {
        console.log( user, token )
    } 
    return (
        <div className="content-home">
            <PromoBanar />
            <TopNav />
            <MainNav  />
            <MainSection />
            <AdventagesSection />
            <WeeklyProduct />
            <ArriveSection />

            <div className="image-pub1" style={{height:"100px" , maxWidth:" 1300px"}}>
                <img style={{height:"100%" , maxWidth:" 100%"}} src="./src/assets/imgs/pub/img-pubsection1.png     " alt="" />
            </div>
            
            <EditorsPick />
            <FooterSection />
            
            <div style={{height:'100px'}}></div>
            <BottomNav />
        </div>
    );
}