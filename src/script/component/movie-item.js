class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: flex;
                margin-bottom: 18px;
                margin-top: 10px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 20px;
                overflow: hidden;
            }   
            .fan-art-food {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }    
            .food-info {
                padding: 24px;
            }
            .food-info > h2 {
                text-align: center;
                font-weight: bold;
            }    
            .food-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: justify;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
            }
            </style>

            <img class="fan-art-movie" src="https://image.tmdb.org/t/p/w220_and_h330_face/${this._movie.poster_path}" alt="Fan Art">
            <div class="movie-info">
                <h2>${this._movie.title}</h2>
                <p>${this._movie.overview}</p>
            </div>
            `;
    }
}


customElements.define('movie-item', MovieItem);