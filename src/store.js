import { reactive } from 'vue'
import axios from 'axios'
import { apikey } from '../apikey'

export const store = reactive({
    gamesList: [],
    apiURL: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    apiCategoryParameter: "platform",
    categoryValue: "",
    loading: true,
    maxResults: 50,
    getGames() {

        this.loading = true;
        let myUrl = this.apiURL;

        if (this.categoryValue !== "") {
            myUrl += `?${this.apiCategoryParameter}=${this.categoryValue}`;
        }

        const config = {
            headers: {
                'X-RapidAPI-Key': apikey.key,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        axios.get(myUrl, config)
            .then((res) => {
                const maxNumber = res.data.length < this.maxResults ? res.data.length : this.maxResults;
                const shortArray = res.data.slice(0, maxNumber);
                this.gamesList = shortArray;
                this.loading = false;
            })
            .catch((err) => {
                console.log("Error", err);
            });

    },
    getGamesFromChange(event) {
        console.log(event);
        this.getGames();
    }
});