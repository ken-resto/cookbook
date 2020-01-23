import React from 'react';




function Advertisements({ items }) {
    return (
        <div style={{ paddingTop: 100, display: "grid", gridTemplateColumns: "auto auto" }}>
            {items.map(item => {
                return (
                    <div className="home_pic_container1">
                        <div style={{
                            fontSize: item.fsize,
                            fontFamily: item.ffamily,
                            paddingTop: item.padtop,
                            paddingLeft: item.padleft,
                        
                        }}
                            className={item.container}>
                            {item.text}
                        </div>
                        <img
                            style={{ height: "100%", width: "100%", borderRadius: 39 }}
                            src={item.image} />
                    </div>
                )
            })}
        </div>
    )


}


export default Advertisements;