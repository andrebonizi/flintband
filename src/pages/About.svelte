<script>
    import { fly } from 'svelte/transition';

    export let mobile;
</script>

<div in:fly="{{ x: 200, duration: 2000 }}" class="{ mobile ? "mobile": "desk"}">
    <div class="title">About</div><hr>
    <div class="content">
        <div class="flint">Flint.</div> began as a desire to create a sound that is not obvious, but which traverses several
        realms of rock. Odd tunings, unexpected chord progressions, peculiar percussion are blended carefully with lyrical
        musings that take listeners on a roller coaster ride of moods, feelings and ideas. At one moment, a listener may hear
        something remotely familiar; however, before they can digest the sound, it is transformed into something unforeseen,
        or was it?
        <br><br>
        Before getting <div class="flint">Flint.</div> up and running, the two songwriters, Peter Jenner and Tony Rosenberg,
        had played in a covers band in Brisbane, Australia. “Playing the pub scene in Brisbane put us together in a great
        experience for performance,” explains Tony. “But as for creating music, it was less than what I was looking for.”
        Peter was playing rhythm guitar in the band when they joined forces, quit the covers thing, and went into the studio
        to write their own material.
        <br><br>
        The band’s debut EP (2021 – Follow the Embers), a five-song compilation with a rock sound with an edge.
        Our peculiarity, says Peter, was in the odd guitar tunings. “In an attempt to stay away from the obvious,
        we have been messing around with alternate tunings for the guitar. It opened up a world of opportunity in terms of
        experimentation.” This was born from the idea of mixing influences but, at the same time, trying to avoid sounding
        like other bands.
        Armed with a new drummer, <div class="flint">Flint.</div> is set to release a flurry of new singles at the end of
        2022, beginning with Beautifully Imperfect, produced, mixed and mastered by David Richards (Green Day, Lady Gaga,
        Radiators, The Choir Boys and many more). The ever-evolving writing process has led to songs with strong messages
        and peculiar blends of dynamics.
        <br><br>
        Four more singles are set for release over the summer of 2022, moving into the early months of 2023.
    </div>
    <!--
    <br><br>
    <div class="title">About old</div><hr>
    <div class="content">
        Tony Rosenberg (vocalist / lyricist) and Peter Jenner (songwriter / guitarist) have
        been playing together for almost three years now, and writing as <div class="flint">Flint.</div> for almost
        two.
        <br><br>
        John Doyle (bass) and Brian Foulds (drums) joined the band in late 2020 and the
        fruit of their efforts is (will be) the band’s debut EP, a five-song compilation of rock
        music with an edge.
        <br><br>
        Gigs started up again, and <div class="flint">Flint.</div>
        is playing at several bars and pubs in southeast Queensland.
        Follow our social media platforms for dates.
        <br><br>
        <div class="flint">Flint.</div> began as a desire to create a sound that is not obvious, but which traverses
        several realms of rock. Odd tunings, unexpected chord progressions, peculiar
        percussion are blended carefully with lyrical musings that take listeners on a roller
        coaster ride of moods, feelings and ideas. At one moment, a listener may hear
        something remotely familiar; however, before they can digest the sound, it is
        transformed into something unforeseen, or was it?
    </div>
    <br> <br>
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
    </div> -->
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
        text-align: left;
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