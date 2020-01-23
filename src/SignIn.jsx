import React from 'react';




function SignIn({ open }) {
    return (
        <div
            style={{

                position: "fixed",
                top: 100,
                left: 0,
                right: 0,
                bottom: 0,
                background: "#f4e1d7",
                overflow: "scroll"


            }}>
            <div style={{
                marginLeft: "25%",
                marginRight: "25%",
                background: "#6f5050",
                borderRadius:"0% 0% 10% 10%"
            }}>
                <div className="recipe_section_title"
                    style={{
                        marginLeft: "30%",
                        fontFamily: "Oswald",
                        fontWeight: "100"
                    }}>
                    Sign In
      </div>
                <br />
                <br />
                <input type="email" maxLength="500" placeholder="Email" style={{ height: 36, float: "left", width: "35%", padding: "1% 2%", marginLeft: "32%", borderRadius: 15, background: "#dcb5b5", border: "1px solid #c4c4c4" }}></input>
                <br />
                <br />
                <br />
                <input type="password" maxLength="500" placeholder="Password" style={{ height: 36, float: "left", width: "35%", padding: "1% 2%", marginLeft: "32%", borderRadius: 15, background: "#dcb5b5", border: "1px solid #c4c4c4" }}></input>
                <br />
                <br />
                <br />
                <input type="submit" placeholder="Submit" style={{ borderColor:"black",color: "white", height: 50, width: "25%", padding: "1% 2%", marginLeft: "37%", borderRadius: 15, background: "#12511c" }}></input>
                <br/>
                <br/>
                <br/>
            </div>
        </div>
    )


}


export default SignIn;