class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            .search-container {
                max-width: 400px;
                box-shadow: 2px 4px 8px 2px rgba(196, 161, 110, 0.993);
                padding: 8px;
                border-radius: 5px;
                display: flex;
                position: center;
                top: 10px;
                background-color: white;
            }
            
            .search-container > input {
                font-family: 'Courier New', Courier, monospace;
                font-size: 14px;
                text-align: center;
                width: 70%;
                padding: 16px;
                border: 0;
                border-bottom: 1px solid rgb(221, 163, 86);
                font-weight: bold;
            }
            
            .search-container > input:focus {
                font-family: 'Courier New', Courier, monospace;
                text-align: center;
                outline: 0;
                border-bottom: 2px solid rgb(221, 163, 86);
            }
            
            .search-container > input:focus::placeholder {
                font-weight: bold;
            }
            
            .search-container >  input::placeholder {
                color: rgb(221, 163, 86);
                font-weight: normal;
            }
            
            .search-container > button {
                width: 35%;
                cursor: pointer;
                margin-left: auto;
                padding: 10px;
                background-color: rgb(221, 163, 86);
                color: white;
                border: 0;
                text-transform: uppercase;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                flex-direction: column;
                position: static;
                }
                
                .search-container > input {
                width: 100%;
                margin-bottom: 12px;
                }
                
                .search-container > button {
                width: 100%;
                }
            }
            </style>
            
            <div id="search-container" class="search-container">
                <input placeholder="Cari Film" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit">Search</button>
            </div>
            `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);