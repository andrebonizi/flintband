<script>
    let socialNets = [
        { title:"Facebook", link:"https://www.facebook.com/brisbanebandflint", icon:"facebook.png"},
        { title:"Instagram", link:"https://instagram.com/flintbrisbane/", icon:"instagram.png"},
        { title:"Twitter", link:"https://twitter.com/BandFlint", icon:"twitter.png"},
        { title:"Bandcamp", link:"https://flintbrisbane.bandcamp.com/", icon:"bandcamp.png"},
        { title:"Soundcloud", link:"https://soundcloud.com/flint-band/", icon:"soundcloud.png"},
        { title:"Linktree", link:"https://linktr.ee/flintbrisbane", icon:"linktree.png"},
        { title:"YouTube", link:"https://www.youtube.com/channel/UCKYJQFcQ6NgJU9H2R_Yb3FA", icon:"youtube.png"},
        { title:"Spotify", link:"https://open.spotify.com/artist/0xNDoqhAkq7E60KiboodT8?si=b1ddSVdBSgSbpmEJ97opTg&dl_branch=1", icon:"spotify.png" },
    ]
</script>

<div class="container">
    <div class="icon-group">
        {#each socialNets as social }
            <a href="{social.link}" target="_blank">
                <img class="icon" src="media/icons/{social.icon}" alt="{social.title}"/>
            </a>
        {/each}
    </div>
</div>


<style>
    .container{
        display: flex;
        justify-content: flex-start;
    }
    .icon-group{
        box-shadow: 0px 10px 20px black;
        background-color: rgba(255,255,255,.5);
        border-radius: 10px;
        position: fixed;
        bottom: 0;
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon{
        width: 30px;
        padding: 10px;
    }
    @media screen and (max-width: 400px){
        .container{
            justify-content: center;
        }
    }
</style>