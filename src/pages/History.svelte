<script>
    import { fly } from 'svelte/transition';
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="container">
    <div class="title">History</div><hr>
    <div class="content">
        Before getting <div class="flint">Flint.</div> up and running, the two songwriters, Peter Jenner and Tony
        Rosenberg, had played in a covers band in Brisbane, Australia. “Playing the pub
        scene in Brisbane put us together in a great experience for performance,” explains
        Tony. “But as for creating music, it was less than what I was looking for.” Peter was
        playing rhythm guitar in the band when they joined forces, quit the covers thing,
        and went into the studio to write their own material.
        <br><br>
        “Writing songs in isolation, just guitar and vocals, was great… until we got the rest
        of the band together,” muses Peter. “Bringing in the bass and drums threw us for a
        loop.” A good loop. “Drums and bass have really brought the sound together, even
        though we are essentially a guitar rock band.”
        Tony Rosenberg (vocalist / lyricist) and Peter Jenner (songwriter / guitarist) have
        been playing together for almost three years now, and writing as <div class="flint">Flint.</div> for almost 2
        years.
        <br>
        John Doyle (bass) and Brian Foulds (drums) joined <div class="flint">Flint.</div> in late 2020 and the fruit
        of their efforts is the band’s debut EP, a five-song compilation with a rock sound
        with an edge.
        <br><br>
        The sound the band has built is at times heavy, at times melodic, but always rock.
        “It has been an interesting journey to discover our sound instead of playing
        someone else’s,” Tony considers. Our peculiarity, says Peter, lies in the odd guitar
        tunings. “In an attempt to stay away from the obvious, we have been messing
        around with alternate tunings for the guitar. It has opened up a world of opportunity
        in terms of experimentation.” This was born from the idea of mixing influences but,
        at the same time, trying to avoid sounding like other bands.
        <br><br>
        Producing the band’s sound at Alchemix Studios in Brisbane, Andrew Nolan first saw
        <div class="flint">Flint.’s</div> sound as a ‘vintage’ style of rock. “They sounded like some bands from the
        90s or the naughts, but nothing I could put my finger on.” Armed with five
        compelling tunes, <div class="flint">Flint.</div> is recording the EP this April (2021), and it is scheduled
        for release in June.
    </div>
</div>

<style>
    @font-face {
        font-family: 'Mistral';
        font-style: normal;
        font-weight: normal;
        src: local('Mistral'), url('/fonts/MISTRAL.woff') format('woff');
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
    .container{
        padding: 20px;
    }
</style>