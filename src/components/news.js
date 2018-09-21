import React from "react";

export class News extends React.Component{
    render() {
        let data = this.props.data;
        var newsTemplate;
        if ( data.length > 0){
            newsTemplate = data.map(function (item, index) {
                return (
                    <div key = {index}>
                        <Article data = {item} />
                    </div>
                )
            })
        } else  {
            newsTemplate = <p> Unfortunately there is no news.</p>
        };
        return (
            <div className="news">
                {newsTemplate}
                 <strong className={'news_count ' + (data.length > 0  ? ' ' : 'none')}
                 onClick={this.onTotalNewsClick}>
                     Count {data.length} of articles</strong>
            </div>
        );
    }
}
export class Article extends React.Component{
    constructor(props) {
        super(props);
        this.state = {visible: false,
                        counter: 0 };
        this.moreClick = this.moreClick.bind(this);
    };
    moreClick(){
        this.setState({visible: true})
    }
    onTotalNewsClick(){
     this.setState({ counter: ++this.state.counter})
}
    render() {
        let author = this.props.data.author;
        let text = this.props.data.text;
        let fullText = this.props.data.fullText;
        let visible = this.state.visible;

        console.log ('render', this);

        return (
            <div className="article">
                <p className="news_author">{author} : </p>
                <p className="news_text"> {text}</p>
                <a href="#" onClick={this.moreClick}
                   className={'news_more ' + (visible ? 'none' : '')}>
                    More </a>
                <p className={'full_text ' + (visible ? '' : 'none')}>
                    { fullText }</p>
            </div>
        );
    }

}