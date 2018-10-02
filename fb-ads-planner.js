"use strict";

const e = React.createElement;

class FacebookAdsPlanner extends React.Component {
    constructor(props) {
        super(props);
        
        
        
        // maximale lengtes van velden
        
        this.maxPostLength = 125;
        this.maxHeadlineLength = 25;
        this.maxDescriptionLength = 30;
        
        
        
        // velden
        
        this.state = {
            postText: "",
            headlineText: "",
            descriptionText: "",
            adUrl: "",
            adUrlDomain: "",
            imageUrl: "",
            
            postRemaining: this.maxPostLength,
            headlineRemaining: this.maxHeadlineLength,
            descriptionRemaining: this.maxDescriptionLength,
            
        };
        
        
        
        // bij iedere toetsaanslag het voorbeeld bijwerken
        
        this.handleChange = this.handleChange.bind(this);
        
        
        
    }
    
    
    
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        
        
        // maximale lengte valideren
        
        if (name == "postText") {
            if (value.length > this.maxPostLength) {
                return;
                
            } else {
                this.setState({postRemaining: this.maxPostLength - value.length});
                
            }
            
        }
        
        if (name == "headlineText") {
            if (value.length > this.maxHeadlineLength) {
                return;
                
            } else {
                this.setState({headlineRemaining: this.maxHeadlineLength - value.length});
                
            }
            
        }
        
        if (name == "descriptionText") {
            if (value.length > this.maxDescriptionLength) {
                return;
                
            } else {
                this.setState({descriptionRemaining: this.maxDescriptionLength - value.length});
                
            }
            
        }
        
        
        
        // domeinnaam uit URL achterhalen
        
        if (name == "adUrl") {
            let matches = value.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
            let domain = matches ? matches[1] : "";
            
            this.setState({adUrlDomain: domain});
            
        }
        
        
        
        // nieuwe waarde opslaan
        
        this.setState({
            [name]: value
            
        });
        
        
        
    }
    
    
    
    render() {
        return (
            <div>
                <h1>Facebook advertentie inplannen</h1>
                <form id="ads-planner-form">
                    <label htmlFor="ads-planner-post-text">Bericht tekst</label>
                    <input type="text" name="postText" id="ads-planner-post-text" value={this.state.postText} onChange={this.handleChange} />
                    <span>{this.state.postRemaining} tekens over</span>
                    <label htmlFor="ads-planner-headline-text">Titel</label>
                    <input type="text" name="headlineText" id="ads-planner-headline-text" value={this.state.headlineText} onChange={this.handleChange} />
                    <span>{this.state.headlineRemaining} tekens over</span>
                    <label htmlFor="ads-planner-description-text">Beschrijving</label>
                    <input type="text" name="descriptionText" id="ads-planner-description-text" value={this.state.descriptionText} onChange={this.handleChange} />
                    <span>{this.state.descriptionRemaining} tekens over</span>
                    <label htmlFor="ads-planner-ad-url">Link</label>
                    <input type="text" name="adUrl" id="ads-planner-ad-url" value={this.state.adUrl} onChange={this.handleChange} />
                    <label htmlFor="ads-planner-image-url">Afbeelding (URL)</label>
                    <input type="text" name="imageUrl" id="ads-planner-image-url" value={this.state.imageUrl} onChange={this.handleChange} />
                </form>
                <div id="ads-planner-preview">
                    <div class="post-header">
                        <img src="img/pageicon.jpg" class="page-icon" />
                        <div class="fb-title-container">
                            <h3 class="fb-title">Testpagina</h3>
                            <span class="sponsored-text">Gesponsord · <img src="img/globe.png" /></span>
                        </div>
                        <img src="img/meatballs.png" class="post-menu" />
                    </div>
                    <p class="post-text">{this.state.postText}</p>
                    <a href={this.state.adUrl} target="_blank" class="ad-preview">
                        <img src={this.state.imageUrl} />
                        <div class="ad-footer">
                            <h4>{this.state.adUrlDomain}</h4>
                            <h3>{this.state.headlineText}</h3>
                            <p>{this.state.descriptionText}</p>
                        </div>
                    </a>
                    <div class="fb-actions">
                        <span>Vind ik leuk</span>
                        <span>Opmerking plaatsen</span>
                        <span>Delen</span>
                    </div>
                </div>
            </div>
            
        );
        
    }
    
    
    
}



const domContainer = document.querySelector("#ads-planner-container");
ReactDOM.render(e(FacebookAdsPlanner), domContainer);


