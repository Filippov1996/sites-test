import React, {Component } from "react";

class Gallery extends Component{
    render(){
        return(
                <section style={{display:'flex'}}>
                    <Image src="https://www.oleneferma.ru/pic/photo-page-fotogalereja.jpg" title="Deer"/>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg" title="Beer"/>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/7/77/Nubianvulture.jpeg?utm_source=ru.wiktionary.org&utm_campaign=index&utm_content=original" title="Vulture"/>
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/8/87/Walrus_in_the_Russian_Arctic_National_Park%2C_Novaya_Zemlya_2015-2.jpg" title="Walrus"/>
                </section>

        )
    }
}
    class Image extends Component {
            render(){
                return(
                    <figure style={{margin:'10px',width:'30%'}}>
                        <img src={this.props.src} alt={this.props.alt} style={{width:'100%',display:"block"}}/>    
                    <figcaption>
                        <h3>Species: {this.props.title}</h3>
                    </figcaption>
                    </figure>
                )
            }
    }
export default Gallery;