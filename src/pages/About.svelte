<script>
    import { fly } from 'svelte/transition';
    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="{ mobile ? "mobile": "desk"}">
    <b>ABOUT</b><br>
    <p>
        Tony Rosenberg (vocalist / lyricist) and Peter Jenner (songwriter / guitarist) have
        been playing together for almost three years now, and writing as Flint. for almost
        two.
        <br><br>
        John Doyle (bass) and Brian Foulds (drums) joined the band in late 2020 and the
        fruit of their efforts is (will be) the band’s debut EP, a five-song compilation of rock
        music with an edge.
        <br><br>
        Flint. began as a desire to create a sound that is not obvious, but which traverses
        several realms of rock. Odd tunings, unexpected chord progressions, peculiar
        percussion are blended carefully with lyrical musings that take listeners on a roller
        coaster ride of moods, feelings and ideas. At one moment, a listener may hear
        something remotely familiar; however, before they can digest the sound, it is
        transformed into something unforeseen, or was it?
    </p>
</div>

<style>
    .desk{
        font-size: 2.5rem;
    }
    .mobile{
        font-size: 2rem;    
        text-align: center;
    }
    p{
        font-size: 1.5rem;
        line-height: 1.5rem;
    }
    b{
        text-decoration: underline;
    }
</style>