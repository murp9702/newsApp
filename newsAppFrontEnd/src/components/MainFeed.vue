<template>
    <div class='mainFeed'>
        <div class='newsArticle' v-for="(article,index) in mainFeed" :key='index'>
            <div class='newsArticleContainer'>
                <div class='Image'><img :src="article.urlToImage" /></div>
                <div class='Title'>{{article.title}}</div>
                <div class='Description'>{{article.description}}</div>
                <div class='URL'>{{article.URL}}</div>
                <div class='publishedAt'>{{article.publishedAt}}</div>
                <div class='source'>{{article.source.name}}</div>
            </div>
        </div>
        <!-- <button @click="apiRequest">Click Me</button> -->
    </div>
</template>

<script>
    export default {
        name: 'MainFeed',
        data() {
            return {
                mainFeed: []
            }
        },
        created () {
            this.getApi()
        },
        methods: {
            getApi() {
                var that = this
                $.get("http://localhost:8081", function(dataFromServer) {
                    console.log(dataFromServer.articles)
                    for (var i=0; i < dataFromServer.articles.length; i++){
                        that.mainFeed.push(dataFromServer.articles[i])
                    }
                
                })
            }
        }
    }
</script>


<style scoped>
    .mainFeed {
        display: grid;
        margin: 50px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: minmax(500px, auto);
        grid-gap: 100px;
    }
    
    .newsArticle {
        border: 1px solid black;
    }
</style>
