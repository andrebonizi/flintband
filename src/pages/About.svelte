<script>
    import { fly } from 'svelte/transition';

    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="{ mobile ? "mobile": "desk"}">
    <div class="title">About</div><hr>
    <div class="content">
        Tony Rosenberg (vocalist / lyricist) and Peter Jenner (songwriter / guitarist) have
        been playing together for almost three years now, and writing as <div class="flint">Flint.</div> for almost
        two.
        <br><br>
        John Doyle (bass) and Brian Foulds (drums) joined the band in late 2020 and the
        fruit of their efforts is (will be) the band’s debut EP, a five-song compilation of rock
        music with an edge.
        <br><br>
        <div class="flint">Flint.</div> began as a desire to create a sound that is not obvious, but which traverses
        several realms of rock. Odd tunings, unexpected chord progressions, peculiar
        percussion are blended carefully with lyrical musings that take listeners on a roller
        coaster ride of moods, feelings and ideas. At one moment, a listener may hear
        something remotely familiar; however, before they can digest the sound, it is
        transformed into something unforeseen, or was it?
    </div>
</div>

<style>
    @font-face {
        font-family: 'Mistral';
        font-style: normal;
        font-weight: normal;
        src: local('Mistral'), url('/fonts/MISTRAL.woff') format('woff');
    }
    .desk{
        font-size: 1.5rem;
        padding: 20px;
    }
    .mobile{
        font-size: 2rem;    
        text-align: center;
        padding: 20px;
    }
    .content{
        font-size: 1.5rem;
    }
    .flint{
        display: inline;
        font-family: 'Mistral';
        padding: 0;
        margin: 0;
        font-size: 2rem;
    }
</style>