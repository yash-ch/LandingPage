import "../css/mainBody.css"
import {Grid} from "@mui/material";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default function MainBody() {
    return (
        <div className={"main-div"}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={5}>
                    <div>
                        <p className={"main-text"}>
                            Share your smile with the world and find friends
                        </p>
                        <h4 className={"sub-text"}>
                            Thousands of new profiles delivered<br/>
                            weekly to your inbox
                        </h4>
                        <div className={"get-started-div-1"}>
                            <button className={"get-started-button"} onClick={()=>{
                                toast("Get Started Clicked");
                            }}>
                                Get Started
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} md={7}>
                    <img src={"assets/friends.jpg"} alt="friends" className={"friends-img"}/>
                </Grid>
            </Grid>
        </div>
    );
}