import { Navigation } from "./Componenets/Navigation/Navigation";
import { Home } from './Componenets/Home/Home';
import { GoodService } from "./Componenets/GoodService_2/GoodService";
import { PicturesSection } from "./Componenets/PicturesSection_3/PicturesSection";
import { GroupSection } from "./Componenets/GroupSection_4/GroupSection";
import { AdventureTours } from "./Componenets/AdventureTours_5/AdventureTours";
import { AdventureStart } from "./Componenets/AdventureStart_6/AdventureStart";
import { CommentsSection } from "./Componenets/CommentsSection_7/CommentsSection";
import { ToursNature } from "./Componenets/ToursNature_8/ToursNature";
import { CreateComment } from "./Componenets/CreateComment_9/CreateComment";
import { Offerings } from "./Componenets/Home/Offerings/Offerings";
import { useState } from "react";
import { Auth } from "./Componenets/Auth/Auth";

import { UserProvider } from "./context/UserContext";
import { Profile } from "./Componenets/Profile/Profile";


function App() {

    const [ showSingInPopUp, setShowSingInPopUp ] = useState(false);
    const [ profileInfo, setProfileInfo ] = useState(false);

    function singIn() {
        setShowSingInPopUp(prevValue => !prevValue);
    }

    function profileHandler() {
        setProfileInfo(prevValue => !prevValue);
    }
    
    return (
        <>
            <UserProvider>
                <Navigation singInHandler={ singIn } profileHandler={ profileHandler } />
                {showSingInPopUp && <Auth showSingHandler={ singIn }/>}
                {profileInfo && <Profile profileHandler={profileHandler} /> }
                <Home />
                <Offerings />
                <GoodService />
                <PicturesSection />
                <GroupSection />
                <AdventureTours />
                <AdventureStart />
                <CommentsSection />
                <ToursNature />
                <CreateComment /> 
            </UserProvider>
        </>
    )
}

export default App;
