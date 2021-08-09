<script>
    import { fly } from 'svelte/transition';
    import Icon from 'svelte-awesome';
    import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="{ mobile ? "mobile": "desk"}">
    <div class="main-title">Press/Airplay</div><hr>
        <br><br>
        <a class="press" href="docs/press_august_2021.pdf" target="_blank" >
            <Icon data={faNewspaper} scale={3} pulse></Icon>
            Press
        </a>
        

<p class="title">Radio stations/programs Flint has been played on:</p>
<div class="row">
    <div>
        <br>Radio WIGWAM
        <br>JD’s Playlist (multiple stations)
        <br>Mind the Gap (WFDU)
        <br>Rak Rock Radio
        <br>Eddie King New Music Show
        <br>TJ&#39;s Muse Bridge (Museboat)
        <br>Gippsland FM 104.7
        <br>Northeast Ohio Rock
        <br>Belter Radio (UK)
        <br>Radio Kaos Caribou (France)
        <br>Only Rock Radio
    </div>
    <div>
        <br>CBJ Radio
        <br>Bridge FM
        <br>Flirt FM
        <br>89.7 FM
        <br>Valley FM 89.5
        <br>MTRI – London
        <br>Duggystone Radio
        <br>Overdrive (HOT-FM)
        <br>Top Cat Radio (Spain)
        <br>Hive Radio (UK)
        
    </div>
    <div>
        <br>88.3 Southern FM
        <br>Central Coast Radio
        <br>Eardrum Buzz Radio
        <br>Perth 382 Radio
        <br>Orange Hat Radio
        <br>Lonely Oak Radio
        <br>Bexar Fut Radio
        <br>Good Music Radio
        <br>BIG City Radio
        <br>Deal Radio 
    </div>
</div>

<p class="title">Podcasts</p>
<p class="content">
    <br>Unheard Indie (<a href="https://www.podparadise.com/Podcast/1389081148/Listen/1626607404/0?fbclid=IwAR3NEFT3UKXoR06mhSbjK7Pa6qZj0mUAJDnv4jlbLSxXDug7l_C3mhi5eZ8">Ep. 224</a>)
    <br>What’s Happenin’ Music Show (<a href="https://soundcloud.com/advosound/whats-happenin-music-show-episode-11?fbclid=IwAR0hbwvZws8vz1PgxLJL5ZLA74Nl37HnrnB9ksLmuI_wkNchQKZUkkvwSOM">Ep. 11</a>)
    <br>A1M Record’s New Music Show (<a href="https://soundcloud.com/a1mrecords/new-music-show-episode-119-june-24th-indie-rocks-radio?fbclid=IwAR0hbwvZws8vz1PgxLJL5ZLA74Nl37HnrnB9ksLmuI_wkNchQKZUkkvwSOM">Ep. 119</a>)
    <br>Buzzrpod (<a href="https://thebuzzrpod.com/2021/06/28/flint/">Jun. 28</a> and <a href="https://thebuzzrpod.com/2021/08/02/flint-debut-ep-follow-the-embers/">Aug. 2</a>)
    <br>Gee Force (<a href="https://www.mixcloud.com/Deadearnest/gee-force-25-07-21/?fbclid=IwAR1q8aExk4fdMMt7jZGdCc4VLewOEVmM9ovpz_UX10gGYfqeA-k93qqfnoM">Jul. 25</a>)
</p>

<p class="title">Press</p>
<p class="content">
    <br><a href="https://aramintasattic.com/2021/04/14/band-profile-flint/?fbclid=IwAR3SdgveoTBjMq_KJ2pCHOoBEkSRY3Dh1axcrWM-zmZBE5MzUWwd975FF-A">
    Band bio</a> on Araminta’s Attic blog – April 14 th , 2021
    <br><a href="https://corruptedsounds.com.au/flint-release-their-new-single-colours/">Review</a> of the video for Colours by Corrupted Sounds - June 27 th , 2021
    <br><a href="https://thepermanentrainpress.com/post/655199343670935552/under-the-radar-june-2021">Review</a> of our first single Colours by The Permanent Rain Press - June 27 th , 2021
</p>
</div>

<style>
    @font-face {
        font-family: 'Mistral';
        font-style: normal;
        font-weight: normal;
        src: local('Mistral'), url('/fonts/MISTRAL.woff') format('woff');
    }
    .desk{
        font-size: 1rem;
        padding: 20px;
    }
    .mobile{
        font-size: 2rem;    
        text-align: center;
        padding: 20px;
    }
    .content{
        font-size: 15px;
    }
    .row{
        display: flex;
        justify-content: space-between;
    }
    .flint{
        display: inline;
        font-family: 'Mistral';
        padding: 0;
        margin: 0;
        font-size: 2rem;
    }
    .main-title {
        font-size: 30px;
        font-weight: bold;
    }
    .title{
        font-size: 20px;
        font-weight: bold;
    }
    a.press{
        text-align: center;
        margin-left: 30%;
    }
</style>