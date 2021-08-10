<script>
    import { fly } from 'svelte/transition';

    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}">
    <div class="info">
        Click on preferred link to listen to the song or see the video.
    </div>
    <div  class="{ mobile ? "mobile": "desk"}">
        <div class="group">
            <div class="single">
                <img src="image/covers/embers.png" alt="embers album cover" />
                <div class="links">
                    <a href="https://flintbrisbane.bandcamp.com/album/follow-the-embers-ep">
                        <img class="icon" src="image/icons/bandcamp_extended.png" alt="bandcamp icon" />
                    </a>
                    <a href="https://soundcloud.com/flint-band/sets/flint-follow-the-embers/s-5F0R4u8VlnH">
                        <img class="icon" src="image/icons/soundcloud_extended.png" alt="soundcloud icon" />
                    </a>
                </div>
                <div>
                    Follow the Embers is Flint.’s first
                    EP, out late July this year.
                </div>
            </div>
            <div class="single">
                <img src="image/covers/colours.png" alt="colours album cover" />
                <div class="links">
                    <a href="https://www.youtube.com/watch?v=HzLb7Dl5bag&ab_channel=Flint" target="_blank">
                        <img class="icon" src="image/icons/youtube_extended.png" alt="youtube icon" />
                    </a>
                    <a href="https://flintbrisbane.bandcamp.com/track/colours" target="_blank">
                        <img class="icon" src="image/icons/bandcamp_extended.png" alt="bandcamp icon" />
                    </a>
                    <a href="https://soundcloud.com/flint-band/colours/s-ndR82NmrAr3" target="_blank">
                        <img class="icon" src="image/icons/soundcloud_extended.png" alt="soundcloud icon" />
                    </a>
                </div>
                <div>
                    Colours begins with a sparkley guitar
                    to ease into the mood, lifts your
                    spirit in the chorus, and finishes big
                    when All The Colours Blend Into One.
                </div>
            </div>
        </div>
        <div class="group">
            <div class="single">
                <img src="image/covers/wideawake.jpeg" alt="wide awake album cover" />
                <div class="links">
                    <a href="https://youtu.be/poSwKzsiSaM " target="_blank">
                        <img class="icon" src="image/icons/youtube_extended.png" alt="youtube icon" />
                    </a>
                    <a href="https://flintbrisbane.bandcamp.com/track/wide-awake" target="_blank">
                        <img class="icon" src="image/icons/bandcamp_extended.png" alt="bandcamp icon" />
                    </a>
                    <a href="https://soundcloud.com/flint-band/wide-awake/s-Ve8i5h4qEBa" target="_blank">
                        <img class="icon" src="image/icons/soundcloud_extended.png" alt="soundcloud icon" />
                    </a>
                </div>
                <div>
                    With a hint of Arctic Monkeys, Wide Awake is a roller coaster ride through the dark and light of a high-energy rock dream.
                </div>
            </div>
            <div class="single">
                <img class="icon" style="width: 20px;" src="image/icons/spotify_white.png" alt="spotify icon" /><p style="display: inline;">Spotify Links:</p>
                <ul>
                    <li><a href="https://open.spotify.com/album/2Rueev6IPxtxwbXbuhfYwi?si=VIEyra5uSBisV22-UEpF8Q&amp;dl_branch=1">
                            Follow the Embers
                    </a></li>
                    <li><a href="https://open.spotify.com/track/3RjPLxIMiokDvOtu3RNtH6?si=376c0e7dd7fe492a">Wide Awake</a></li>
                    <li><a href="https://open.spotify.com/track/6XlOz6VulBoNeuyUrVcMDh?si=6577e16a06764e09">Painted Skin</a></li>
                    <li><a href="https://open.spotify.com/track/3hrCEbZcGNNF0TqPE7axHc?si=7100eafb47f240b6">Colours</a></li>
                    <li><a href="https://open.spotify.com/track/40wdwUon6dWP1AxAFCj567?si=1d64d529aebc4ef6">Give me Serenity</a></li>
                    <li><a href="https://open.spotify.com/track/6tqCse5yVRredmhp99W6ky?si=22de55e6bd054815">Shadows</a></li>
                </ul>

            </div>
        </div>
    </div>
</div>
<style>
    .desk{
        font-size: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin: auto 20px;
        width: 100%;
    }
    .mobile{
        font-size: 2rem;    
        text-align: center;
    }
    img{
        width: 100%;
    }
    .group {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .single{
        margin: 20px 50px;
        width: 250px;
        text-align: left;
    }
    .single > div, .single > ul, .single > p{
        font-size: 1rem;
    }
    .single > p {
        text-decoration: underline;
        text-transform: uppercase;
        align-self: flex-start;
    }
    .icon{
        width: 50px;
        margin: 10px;
        border-radius: 5px;
    }
    .links{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
    }
    .info{
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media (max-width: 800px) {
        .group {
            flex-direction: column;
            align-items: center;
        }
    }
</style>